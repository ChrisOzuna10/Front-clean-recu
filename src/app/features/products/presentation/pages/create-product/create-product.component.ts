import { Component } from '@angular/core';
import { ProductHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  selector: 'create-product-page',
  standalone: true,
  imports: [ProductHeaderComponent, FooterComponent, CreateProductComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductPageComponent {

}
