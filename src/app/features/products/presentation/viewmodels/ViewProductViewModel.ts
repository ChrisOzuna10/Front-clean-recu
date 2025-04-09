import { Injectable } from '@angular/core';
import { ProductDTO } from '../../data/dtos/product.DTO';
import { ViewAllProductsUseCase } from '../../domain/view-all-products.usecase';
import { ViewOneProductUseCase } from '../../domain/view-Id-product.usecase';

@Injectable({
  providedIn: 'root'
})
export class ProductViewModel {
  musicList: ProductDTO[] = [];
  error: string | null = null;

  constructor(
    private viewAll: ViewAllProductsUseCase,
    private viewOne: ViewOneProductUseCase
  ) {}

  // Obtener todos los productos
  async getAllProducts(): Promise<ProductDTO[] | null> {
    this.error = null;
    try {
      const response = await this.viewAll.execute();
      this.musicList = response || [];
      return response;
    } catch (err: any) {
      this.error = err.message || 'Error al obtener la lista de los productos';
      return null;
    }
  }

  // Obtener producto por ID
  async getProductById(id: number): Promise<ProductDTO | null> {
    this.error = null;
    try {
      const response = await this.viewOne.execute(id);
      return response;
    } catch (err: any) {
      this.error = err.message || 'Error al obtener el producto por ID';
      return null;
    }
  }
}
