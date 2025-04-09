import { ProductRepository } from "../data/repository/product.repository";
import { ProductService } from "../data/services/product-api.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class DeleteProductUseCase {
    repo: ProductRepository

    constructor(service: ProductService){
        this.repo = new ProductRepository(service)
    }
    async execute(id: number): Promise<void> {
        try {
            await this.repo.delete(id);
            console.log(`Product with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting music with ID ${id}:`, error);
        }
    }
}