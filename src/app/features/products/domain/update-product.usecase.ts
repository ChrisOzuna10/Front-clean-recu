import { Injectable } from "@angular/core";
import { ProductDTO } from "../data/dtos/product.DTO";
import { Product } from "../data/models/product.model";
import { ProductRepository } from "../data/repository/product.repository";

@Injectable({
  providedIn: 'root'
})
export class UpdateProductUseCase {
  constructor(private repo: ProductRepository) { }

  // El execute maneja la lógica de actualizar el producto
  async execute(id: number, product: Product): Promise<ProductDTO | null> {
    try {
      const response = await this.repo.update(id, product);

      if (response != null) {
        const data = new ProductDTO(response.id, response.name, response.price);
        console.log("Use Case: Producto actualizado", JSON.stringify(data));
        return data;
      }
      return null;
    } catch (error) {
      console.error("Error en el UseCase de actualización:", error);
      throw new Error('No se pudo actualizar el producto');
    }
  }
}
