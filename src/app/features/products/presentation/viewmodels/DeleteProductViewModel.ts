import { Injectable } from '@angular/core';
import { DeleteProductUseCase } from '../../domain/delete-product.usecase';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductViewModel {
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private usecase: DeleteProductUseCase) {}

  // Lógica para eliminar un producto
  async deleteProduct(id: number): Promise<void> {
    this.error = null;
    this.successMessage = null;

    try {
      await this.usecase.execute(id);

      this.successMessage = 'Product eliminado correctamente';
    } catch (error: any) {
      console.error('Error al eliminar el product:', error);
      this.error = error.message || 'Error desconocido al eliminar el product';
    }
  }
}