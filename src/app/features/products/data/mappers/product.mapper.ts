import { Product } from "../models/product.model";
import { ProductDTO } from "../dtos/product.DTO";

export class ProductMapper {
  static fromDTO(dto: ProductDTO): Product {
    return new Product(dto.id, dto.name, dto.price);
  }

  static toDTO(product: Product): ProductDTO {
    return new ProductDTO(0, product.name, product.price);
  }
}
