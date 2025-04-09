import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDTO } from '../../../data/dtos/music.DTO';
import { MusicService } from '../../../data/services/music-api.service';
import { CommonModule } from '@angular/common';
import { MusicViewModel } from '../../viewmodels/ViewMusicViewModel';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-view-one-music',
  templateUrl: './view-one-music.component.html',
  styleUrls: ['./view-one-music.component.css']
})
export class ViewOneMusicComponent implements OnInit {
  music: MusicDTO | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(
    private uc: MusicViewModel,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMusic(+id);
    } else {
      this.error = 'ID no encontrado en la URL';
      this.isLoading = false;
    }
  }
  loadMusic(id: number): void {
    this.isLoading = true;
    this.uc.getMusicById(id)
      .then((response) => {
        if (response) {
          this.music = response;
        } else {
          this.error = 'No se encontró la música';
        }
      })
      .catch((err) => {
        this.error = 'Error al cargar la música';
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}