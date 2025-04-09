import { firstValueFrom } from "rxjs";
import { ProductDTO } from "../data/dtos/product.DTO";
import { ProductRepository } from "../data/repository/product.repository";
import { ProductService } from "../data/services/product-api.service";
import { Product } from "../data/models/product.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ViewOneProductUseCase {
    private repo: ProductRepository;

    constructor(service: ProductService) {
        this.repo = new ProductRepository(service);
    }
    async execute(id: number): Promise<ProductDTO | null> {
        const response: Product = await firstValueFrom(this.repo.getById(id));

        if (response) {
            const productDTO = new ProductDTO(response.id, response.name, response.price);
            return productDTO;
        }
        return null;
    }
}
