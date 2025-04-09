import { Component } from '@angular/core';
import { UpdateProductComponent } from '../../components/update-product/update-product.component';
import { ProductHeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'update-product-page',
  standalone: true,
  imports: [UpdateProductComponent, ProductHeaderComponent, FooterComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductPageComponent {

}
