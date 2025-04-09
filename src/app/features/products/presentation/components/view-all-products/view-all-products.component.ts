import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDTO } from '../../../data/dtos/product.DTO';
import { ProductViewModel } from '../../viewmodels/ViewProductViewModel';
import { DeleteProductViewModel } from '../../viewmodels/DeleteProductViewModel';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  products: ProductDTO[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private productViewModel: ProductViewModel,
    private deleteViewModel: DeleteProductViewModel,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productViewModel.getAllProducts()
      .then(products => {
        if (products) {
          console.log(products);
          this.products = products;
        }
      })
      .catch(err => {
        this.error = err.message || '❌ Error al cargar los productos.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  onEdit(id: number): void {
    this.router.navigate(['/products/update', id]);
  }

  onDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteViewModel.deleteProduct(id)
          .then(() => {
            this.products = this.products.filter(product => product.id !== id);
            Swal.fire({
              icon: 'success',
              title: '¡Producto eliminado!',
              text: 'El producto fue eliminado correctamente 🛒',
              confirmButtonText: 'OK'
            });
          })
          .catch(err => {
            this.error = err.message || '❌ Error al eliminar el producto.';
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: this.error || 'Ocurrió un error desconocido.',
              confirmButtonText: 'Entendido'
            });
          });
      }
    });
  }
  
}
