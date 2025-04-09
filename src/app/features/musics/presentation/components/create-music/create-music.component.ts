import { Component } from '@angular/core';
import { CreateMusicViewModel } from '../../viewmodels/CreateMusicViewModel';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-music-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css'],
})
export class MusicCreateComponent {
  title: string = ''; // Campo para el título de la música
  gender: string = ''; // Campo para el género de la música
  error: string | null = null; // Variable para mostrar errores
  isValid: boolean = false; // Validación de la creación

  constructor(private musicViewModel: CreateMusicViewModel) {}

  onChangeTitle(title: string): void {
    this.musicViewModel.onChangeTitle(title);
  }

  onChangeGender(gender: string): void {
    this.musicViewModel.onChangeGender(gender);
  }

  async doCreateMusic(): Promise<void> {
    await this.musicViewModel.doCreateMusic();

    if (this.musicViewModel.isValid) {
      console.log('Música agregada correctamente');
    } else {
      this.error = this.musicViewModel.error || 'Error desconocido';
    }
  }

  onSubmit(): void {
    this.musicViewModel.onChangeTitle(this.title);
    this.musicViewModel.onChangeGender(this.gender);

    this.doCreateMusic();
  }
}
