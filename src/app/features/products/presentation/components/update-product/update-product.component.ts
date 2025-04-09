import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UpdateProductViewModel } from '../../viewmodels/UpdateProductViewModel';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  id: number = 0;
  name: string = '';
  price: number = 0;
  error: string | null = null;
  isValid: boolean = false;

  constructor(
    private productViewModel: UpdateProductViewModel,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : 0;
    
    this.productViewModel.loadProduct(this.id).then(() => {
      this.name= this.productViewModel.name;
      this.price = this.productViewModel.price;
    });
  }

  onChangeName(name: string): void {
    this.productViewModel.onChangeName(name);
  }

  onChangePrice(price: number): void {
    this.productViewModel.onChangePrice(price);
  }

  async doUpdateProduct(): Promise<void> {
    await this.productViewModel.doUpdateProduct(this.id);
    Swal.fire({
      icon: 'success',
      title: 'Producto actualizado!',
      text: 'El producto fue actualizado correctamente 🎶',
      confirmButtonText: 'OK',
    }).then(() => {
      this.router.navigate(['/products/view']);
    })
    if (this.productViewModel.isValid) {
      
      console.log('Producto actualizado correctamente');
    } else {
      this.error = this.productViewModel.error || 'Error desconocido';
    }
  }

  onSubmit(): void {
    this.productViewModel.onChangeName(this.name);
    this.productViewModel.onChangePrice(this.price);

    this.doUpdateProduct();
  }
}
