import { Routes } from '@angular/router';
import { ViewOneMusicComponent } from './components/view-one-music/view-one-music.component';
import { NotFoundComponent } from '../../../shared/pages/not-found/not-found.component';
import { DashboardMusicComponent } from './pages/dashboard/dashboard.component';

import { ViewMusicsComponent } from './pages/view-musics/view-musics.component';
import { UpdateMusicPageComponent } from './pages/update-music/update-music.component';
import { CreateMusicPageComponent } from './pages/create-music/create-music.component';

export const MUSIC_ROUTES: Routes = [
  { path: '', component: DashboardMusicComponent },
  { path: 'view', component: ViewMusicsComponent },
  { path: 'create', component: CreateMusicPageComponent },
  { path: 'view/:id', component: ViewOneMusicComponent },
  { path: 'update/:id', component: UpdateMusicPageComponent },
  { path: '**', component: NotFoundComponent },
];
