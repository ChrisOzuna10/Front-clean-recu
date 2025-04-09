import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-music-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MusicHeaderComponent, FooterComponent],
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardMusicComponent {}
