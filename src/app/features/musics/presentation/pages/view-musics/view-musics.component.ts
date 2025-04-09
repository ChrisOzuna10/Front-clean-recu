import { Component } from '@angular/core';
import { ViewAllMusicsComponent } from '../../components/view-all-musics/view-all-musics.component';
import { MusicHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-view-musics',
  standalone: true,
  imports: [ViewAllMusicsComponent, MusicHeaderComponent, FooterComponent],
  templateUrl: './view-musics.component.html',
  styleUrl: './view-musics.component.css'
})
export class ViewMusicsComponent {

}
