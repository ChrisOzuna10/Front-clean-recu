import { Routes } from '@angular/router';
import { MUSIC_ROUTES } from '../../features/musics/presentation/music.routes';
import { NotFoundComponent } from '../../shared/pages/not-found/not-found.component';
import { DashboardComponent } from '../../shared/pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'musics', loadChildren: () => import('../../features/musics/presentation/music.routes').then(m => m.MUSIC_ROUTES) },
    { path: 'products', loadChildren: () => import('../../features/products/presentation/product.routes').then(m => m.PRODUCT_ROUTES) },
];
