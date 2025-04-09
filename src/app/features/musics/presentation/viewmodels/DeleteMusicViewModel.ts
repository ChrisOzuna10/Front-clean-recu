import { Injectable } from '@angular/core';
import { DeleteMusicUseCase } from '../../domain/delete-music.usecase';

@Injectable({
  providedIn: 'root'
})
export class DeleteMusicViewModel {
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private musicService: DeleteMusicUseCase) {}

  // Lógica para eliminar una música
  async deleteMusic(id: number): Promise<void> {
    this.error = null;
    this.successMessage = null;

    try {
      await this.musicService.execute(id);

      this.successMessage = 'Música eliminada correctamente';
    } catch (error: any) {
      console.error('Error al eliminar la música:', error);
      this.error = error.message || 'Error desconocido al eliminar la música';
    }
  }
}