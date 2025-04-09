import { firstValueFrom } from "rxjs";
import { ProductDTO } from "../data/dtos/product.DTO";
import { ProductRepository } from "../data/repository/product.repository";
import { ProductService } from "../data/services/product-api.service";
import { Product } from "../data/models/product.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ViewAllProductsUseCase {
    repo: ProductRepository
    
    constructor(service: ProductService){
        this.repo = new ProductRepository(service)
    }
    async execute(): Promise<ProductDTO[] | null> {
        const response: Product[] | null = await firstValueFrom(this.repo.getAll());
        
        if (response !== null) {
        const productDTOs = response.map(product => 
                new ProductDTO(product.id, product.name, product.price)
            );
            return productDTOs;
        }
        return null;
    }
}