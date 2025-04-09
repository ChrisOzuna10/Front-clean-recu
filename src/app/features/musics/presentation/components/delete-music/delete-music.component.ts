import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteMusicViewModel } from '../../viewmodels/DeleteMusicViewModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-music',
  standalone: true,
  imports: [CommonModule],
  template: ``
})
export class DeleteMusicComponent implements OnInit {
  musicId: number | null = null;
  message: string = '';
  error: string | null = null;

  constructor(
    private deleteViewModel: DeleteMusicViewModel,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.musicId = idParam ? +idParam : null;

    if (this.musicId !== null) {
      this.deleteMusic();
    } else {
      this.error = '❌ ID inválido en la URL.';
    }
  }

  async deleteMusic(): Promise<void> {
    this.error = null;
    this.message = '';

    try {
      await this.deleteViewModel.deleteMusic(this.musicId!);
      this.message = `✅ Música con ID ${this.musicId} eliminada correctamente.`;
    } catch (err) {
      this.error = '❌ Error al eliminar la música.';
      console.error(err);
    }
  }
}
