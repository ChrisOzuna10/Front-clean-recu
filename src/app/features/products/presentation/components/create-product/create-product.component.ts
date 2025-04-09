import { Component } from '@angular/core';
import { CreateProductViewModel } from '../../viewmodels/CreateProductViewModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-create-product',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  name: string = '';
  price: number = 0;
  error: string | null = null;
  isValid: boolean = false;

  constructor(private productViewModel: CreateProductViewModel, private router: Router) { }

  onChangeName(name: string): void {
    this.productViewModel.onChangeName(name);
  }

  onChangePrice(price: number): void {
    this.productViewModel.onChangePrice(price);
  }

  async doCreateProduct(): Promise<void> {
    await this.productViewModel.doCreateProduct();

    if (this.productViewModel.isValid) {
      Swal.fire({
              icon: 'success',
              title: 'Producto agregado!',
              text: 'El producto fue agregado correctamente 🎶',
              confirmButtonText: 'OK',
            }).then(() => {
              this.router.navigate(['/products']);
            });
      console.log('✅ Producto agregado correctamente');
    } else {
      this.error = this.productViewModel.error || '❌ Error desconocido';
    }
  }

  onSubmit(): void {
    this.productViewModel.onChangeName(this.name);
    this.productViewModel.onChangePrice(this.price);

    this.doCreateProduct();
  }
}
