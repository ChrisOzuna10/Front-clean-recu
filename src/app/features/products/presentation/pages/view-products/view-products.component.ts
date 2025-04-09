import { Component } from '@angular/core';
import { ProductHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { ViewAllProductsComponent } from '../../components/view-all-products/view-all-products.component';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [ProductHeaderComponent, FooterComponent, ViewAllProductsComponent],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsPageComponent {

}
