import { Injectable } from '@angular/core';
import { MusicDTO } from '../../data/dtos/music.DTO';
import { ViewAllMusicsUseCase } from '../../domain/view-all-musics.usecase';
import { ViewOneMusicUseCase } from '../../domain/view-Id-music.usecase';

@Injectable({
  providedIn: 'root'
})
export class MusicViewModel {
  musicList: MusicDTO[] = [];
  error: string | null = null;

  constructor(
    private viewAll: ViewAllMusicsUseCase,
    private viewOne: ViewOneMusicUseCase
  ) {}

  // Obtener todas las músicas
  async getAllMusic(): Promise<MusicDTO[] | null> {
    this.error = null;
    try {
      const response = await this.viewAll.execute();
      this.musicList = response || [];
      return response;
    } catch (err: any) {
      this.error = err.message || 'Error al obtener la lista de música';
      return null;
    }
  }

  // Obtener música por ID
  async getMusicById(id: number): Promise<MusicDTO | null> {
    this.error = null;
    try {
      const response = await this.viewOne.execute(id);
      return response;
    } catch (err: any) {
      this.error = err.message || 'Error al obtener la música por ID';
      return null;
    }
  }
}
