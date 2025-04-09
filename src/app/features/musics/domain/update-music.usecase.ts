import { Injectable } from "@angular/core";
import { MusicDTO } from "../data/dtos/music.DTO";
import { Music } from "../data/models/muisc.model";
import { MusicRepository } from "../data/repository/music.repository";

@Injectable({
  providedIn: 'root'
})
export class UpdateMusicUseCase {
  constructor(private repo: MusicRepository) { }

  // El execute maneja la lógica de actualizar la música
  async execute(id: number, music: Music): Promise<MusicDTO | null> {
    try {
      const response = await this.repo.update(id, music);

      if (response != null) {
        const data = new MusicDTO(response.id, response.title, response.gender);
        console.log("Use Case: Música actualizada", JSON.stringify(data));
        return data;
      }

      return null;
    } catch (error) {
      console.error("Error en el UseCase de actualización:", error);
      throw new Error('No se pudo actualizar la música');
    }
  }
}
