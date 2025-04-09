import { Component } from '@angular/core';
import { CreateMusicViewModel } from '../../viewmodels/CreateMusicViewModel';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; 

@Component({
  standalone: true,
  selector: 'app-music-create',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css'],
})
export class MusicCreateComponent {
  title: string = ''; // Campo para el título de la música
  gender: string = ''; // Campo para el género de la música
  error: string | null = null; // Variable para mostrar errores
  isValid: boolean = false; // Validación de la creación

  constructor(
    private musicViewModel: CreateMusicViewModel,
    private router: Router
  ) {}
  
  onChangeTitle(title: string): void {
    this.musicViewModel.onChangeTitle(title);
  }

  onChangeGender(gender: string): void {
    this.musicViewModel.onChangeGender(gender);
  }

  async doCreateMusic(): Promise<void> {
    await this.musicViewModel.doCreateMusic();
  
    if (this.musicViewModel.isValid) {
      Swal.fire({
        icon: 'success',
        title: '¡Música creada!',
        text: 'La música fue agregada correctamente 🎶',
        confirmButtonText: 'OK',
      }).then(() => {
        this.router.navigate(['/musics']);
      });
    } else {
      this.error = this.musicViewModel.error || 'Error desconocido';
  
      Swal.fire({
        icon: 'error',
        title: 'Error al crear música',
        text: this.error,
        confirmButtonText: 'Entendido',
      });
    }
  }
  

  onSubmit(): void {
    this.musicViewModel.onChangeTitle(this.title);
    this.musicViewModel.onChangeGender(this.gender);

    this.doCreateMusic();
  }
}
