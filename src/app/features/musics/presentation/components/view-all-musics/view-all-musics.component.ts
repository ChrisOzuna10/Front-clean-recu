import { Component, OnInit } from '@angular/core';
import { MusicDTO } from '../../../data/dtos/music.DTO';
import { CommonModule } from '@angular/common';
import { MusicViewModel } from '../../viewmodels/ViewMusicViewModel';
import { Router } from '@angular/router';
import { DeleteMusicViewModel } from '../../viewmodels/DeleteMusicViewModel';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la música permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteViewModel.deleteMusic(id)
          .then(() => {
            this.musics = this.musics.filter(music => music.id !== id);
            Swal.fire({
              icon: 'success',
              title: '¡Música eliminada!',
              text: 'La música fue eliminada correctamente 🎵',
              confirmButtonText: 'OK'
            });
          })
          .catch(err => {
            this.error = err.message || 'Error al eliminar la música';
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: this.error || 'Ha ocurrido un error desconocido',
              confirmButtonText: 'Entendido'
            });
          });
      }
    });
  }
  
}