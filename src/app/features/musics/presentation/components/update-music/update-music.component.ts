import { Component, OnInit } from '@angular/core';
import { UpdateMusicViewModel } from '../../viewmodels/UpdateMusicViewModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-music-update',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-music.component.html',
  styleUrls: ['./update-music.component.css'],
})
export class UpdateMusicComponent implements OnInit {
  id: number = 0; 
  title: string = ''; 
  gender: string = ''; 
  error: string | null = null; 
  isValid: boolean = false;

  constructor(
    private musicViewModel: UpdateMusicViewModel,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : 0;
    
    this.musicViewModel.loadMusic(this.id).then(() => {
      this.title = this.musicViewModel.title;
      this.gender = this.musicViewModel.gender;
    });
  }

  onChangeTitle(title: string): void {
    this.musicViewModel.onChangeTitle(title);
  }

  onChangeGender(gender: string): void {
    this.musicViewModel.onChangeGender(gender);
  }

  async doUpdateMusic(): Promise<void> {
    await this.musicViewModel.doUpdateMusic(this.id);

    if (this.musicViewModel.isValid) {
      console.log('Música actualizada correctamente');
    } else {
      this.error = this.musicViewModel.error || 'Error desconocido';
    }
  }

  onSubmit(): void {
    this.musicViewModel.onChangeTitle(this.title);
    this.musicViewModel.onChangeGender(this.gender);

    this.doUpdateMusic();
  }
}