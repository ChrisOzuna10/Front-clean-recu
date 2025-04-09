import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DeleteProductViewModel } from '../../viewmodels/DeleteProductViewModel';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" style="color: green;">{{ message }}</div>
    <div *ngIf="error" style="color: red;">{{ error }}</div>
  `
})
export class DeleteProductComponent implements OnInit {
  productId: number | null = null;
  message: string = '';
  error: string | null = null;

  constructor(
    private deleteViewModel: DeleteProductViewModel,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.productId = idParam ? +idParam : null;

    if (this.productId !== null) {
      this.deleteProduct();
    } else {
      this.error = '❌ ID inválido en la URL.';
    }
  }

  async deleteProduct(): Promise<void> {
    this.error = null;
    this.message = '';

    try {
      await this.deleteViewModel.deleteProduct(this.productId!);
      this.message = `✅ Producto con ID ${this.productId} eliminado correctamente.`;
    } catch (err) {
      this.error = '❌ Error al eliminar el producto.';
      console.error(err);
    }
  }
}
