import { makeAutoObservable, runInAction } from "mobx";
import { MusicDTO } from "../../data/dtos/music.DTO";
import { AgregateMusicUseCase } from "../../domain/agregate-music.usecase";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CreateMusicViewModel {
  title: string = '';
  gender: string = '';
  error: string | null = null;
  isValid = false;
  agregateMusicUseCase: AgregateMusicUseCase;

  constructor(agregateMusicUseCase: AgregateMusicUseCase) {
    makeAutoObservable(this);
    this.agregateMusicUseCase = agregateMusicUseCase;
}

  onChangeTitle(title: string) {
    this.title = title;
  }

  onChangeGender(gender: string) {
    this.gender = gender;
  }

  async doCreateMusic() {
    this.error = null;  
    if (this.title !== "" && this.gender !== "") {
      let music: MusicDTO = {id: 0, title: this.title, gender: this.gender };
      
      try {
        let data = await this.agregateMusicUseCase.execute(music);
        
        runInAction(() => {
          if (data != null) {
            this.isValid = true;  
          }
        });
      } catch (err: any) {
        runInAction(() => {
          this.error = err.message || "Error al crear la música";  // Mostramos el mensaje de error.
        });
      }
    } else {
      this.error = "Por favor, complete todos los campos";
    }
  }
}
