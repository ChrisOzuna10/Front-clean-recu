import { Component } from '@angular/core';
import { ProductHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardPageComponent {

}
