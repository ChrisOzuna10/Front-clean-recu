import { Component } from '@angular/core';
import { MusicCreateComponent } from '../../components/create-music/create-music.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { MusicHeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-create-music',
  standalone: true,
  imports: [MusicCreateComponent, FooterComponent, MusicHeaderComponent],
  templateUrl: './create-music.component.html',
  styleUrl: './create-music.component.css'
})
export class CreateMusicPageComponent {

}
