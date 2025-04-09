import { Product } from "../data/models/product.model";
import { ProductDTO } from "../data/dtos/product.DTO";
import { ProductRepository } from "../data/repository/product.repository";
import { ProductService } from "../data/services/product-api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AgregateProductUseCase {
    repo: ProductRepository

    constructor(service: ProductService){
        this.repo = new ProductRepository(service)
    }
    async execute(product: Product): Promise<ProductDTO | null> {
        console.log('Producto recibido:', product);  // Agregar log aquí
        const response: ProductDTO | null = await this.repo.create(product);
        var data = null;
        if (response != null) {
            data = new ProductDTO(response.id, response.name, response.price);
        }
        return data;
    }
    
}