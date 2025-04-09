import { Component, OnInit } from '@angular/core';
import { MusicDTO } from '../../../data/dtos/music.DTO';
import { CommonModule } from '@angular/common';
import { MusicViewModel } from '../../viewmodels/ViewMusicViewModel';
import { Router } from '@angular/router';
import { DeleteMusicViewModel } from '../../viewmodels/DeleteMusicViewModel';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-view-all-musics',
  templateUrl: './view-all-musics.component.html',
  styleUrls: ['./view-all-musics.component.css']
})
export class ViewAllMusicsComponent implements OnInit {
  musics: MusicDTO[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private musicViewModel: MusicViewModel,
    private deleteViewModel: DeleteMusicViewModel,
    private router: Router) { }

  ngOnInit(): void {
    this.loadMusics();
  }
  loadMusics(): void {
    this.isLoading = true;
    this.musicViewModel.getAllMusic()
      .then(musics => {
        if (musics) {
          console.log(musics);
          this.musics = musics;
        }
      })
      .catch(err => {
        this.error = err.message || 'Error al cargar las músicas';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  onEdit(id: number): void {
    this.router.navigate(['/musics/update', id]);
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta música?')) {
      this.deleteViewModel.deleteMusic(id)
        .then(() => {
          this.musics = this.musics.filter(music => music.id !== id);
        })
        .catch(err => {
          this.error = err.message || 'Error al eliminar la música';
        });
    }
  }
}