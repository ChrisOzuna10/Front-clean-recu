import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDTO } from '../../../data/dtos/product.DTO';
import { ProductViewModel } from '../../viewmodels/ViewProductViewModel';
import { DeleteProductViewModel } from '../../viewmodels/DeleteProductViewModel';

@Component({
  selector: 'app-view-all-products',
  standalone: true,
  imports: [CommonModule],
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
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.deleteViewModel.deleteProduct(id)
        .then(() => {
          this.products = this.products.filter(product => product.id !== id);
        })
        .catch(err => {
          this.error = err.message || '❌ Error al eliminar el producto.';
        });
    }
  }
}
