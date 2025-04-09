import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductDTO } from '../dtos/product.DTO';
import { ProductService } from '../services/product-api.service';
import { ProductMapper } from '../mappers/product.mapper';
import { Observable, map, lastValueFrom, firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductRepository {
    constructor(private productService: ProductService) { }

    getAll(): Observable<Product[]> {
        return this.productService.getAll().pipe(
            map(dtos => dtos.map(dto => {
                console.log('Mapping DTO to Product:', dto);
                return ProductMapper.fromDTO(dto);
            }))
        );
    }

    getById(id: number): Observable<Product> {
        return this.productService.getById(id).pipe(
            map(response => {
                console.log('DTO fetched from service:', response);
                const dto = (response as any).product; 
                return ProductMapper.fromDTO(dto);
            })
        );
    }


    async create(product: Product): Promise<ProductDTO | null> {
        const dto = ProductMapper.toDTO(product);
        try {
            console.log('Creando producto con DTO:', dto);
            const res = await lastValueFrom(this.productService.create(dto));
            console.log('Respuesta de la API al crear producto:', res);
            return res ?? null;
        } catch (error) {
            console.error('Error al crear el producto:', error);
            return null;
        }
    }

    async update(id: number, product: Product): Promise<ProductDTO | null> {
        const dto = ProductMapper.toDTO(product);
        try {
            console.log('Actualizando producto con id:', id, 'y DTO:', dto);
            const res = await lastValueFrom(this.productService.update(id, dto));
            console.log('Respuesta de la API al actualizar producto:', res);
            return res ?? null;
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            return null;
        }
    }

    delete(id: number): Promise<void> {
        console.log('Eliminando producto con id:', id);
        return firstValueFrom(this.productService.delete(id));
    }
}
