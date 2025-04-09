import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-music-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css'],
})
export class MusicHeaderComponent {}
