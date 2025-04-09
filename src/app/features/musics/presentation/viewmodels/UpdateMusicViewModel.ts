import { Injectable } from '@angular/core';
import { makeAutoObservable, runInAction } from "mobx";
import { MusicDTO } from "../../data/dtos/music.DTO";
import { UpdateMusicUseCase } from "../../domain/update-music.usecase";
import { ViewOneMusicUseCase } from '../../domain/view-Id-music.usecase';
@Injectable({
  providedIn: 'root'
})
export class UpdateMusicViewModel {
  id: number = 0;
  title: string = '';
  gender: string = '';
  error: string | null = null;
  isValid: boolean = false;

  constructor(
    private updateMusicUseCase: UpdateMusicUseCase,
    private viewOneMusicUseCase: ViewOneMusicUseCase
  ) {
    makeAutoObservable(this);
  }

  onChangeTitle(title: string): void {
    this.title = title;
  }

  onChangeGender(gender: string): void {
    this.gender = gender;
  }

  async doUpdateMusic(id: number): Promise<void> {
    this.error = null;

    if (this.title !== "" && this.gender !== "") {
      const updatedMusic: MusicDTO = { id: id, title: this.title, gender: this.gender };

      try {
        const result = await this.updateMusicUseCase.execute(id, updatedMusic);

        runInAction(() => {
          if (result) {
            this.isValid = true;
            console.log('Música actualizada correctamente');
          } else {
            this.error = 'No se pudo actualizar la música';
          }
        });
      } catch (err: any) {
        runInAction(() => {
          this.error = err.message || "Error desconocido al actualizar la música";
        });
      }
    } else {
      this.error = "Por favor, complete todos los campos";
    }
  }

  async loadMusic(id: number): Promise<void> {
    try {
      const music = await this.viewOneMusicUseCase.execute(id);
      runInAction(() => {
        if (music) {
          console.log('Música cargada:', music);
          this.title = music.title;
          this.gender = music.gender;
        } else {
          this.error = 'No se encontró la música';
        }
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = 'Error al cargar los datos de la música';
      });
    }
  }
}