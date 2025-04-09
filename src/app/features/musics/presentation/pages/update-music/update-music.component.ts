import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { UpdateMusicComponent } from '../../components/update-music/update-music.component';

@Component({
  selector: 'app-update-music-page',
  standalone: true,
  imports: [
    CommonModule,
    MusicHeaderComponent,
    FooterComponent,
    UpdateMusicComponent
  ],
  templateUrl: './update-music.component.html',
  styleUrls: ['./update-music.component.css']
})
export class UpdateMusicPageComponent {}
