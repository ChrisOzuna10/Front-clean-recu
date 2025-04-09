import { Injectable } from '@angular/core';
import { ProductRepository } from '../../data/repository/product.repository';
import { runInAction, makeAutoObservable } from 'mobx';
import { UpdateProductUseCase } from '../../domain/update-product.usecase';
import { ViewOneProductUseCase } from '../../domain/view-Id-product.usecase';
import { ProductDTO } from '../../data/dtos/product.DTO';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductViewModel {
  id: number = 0;
  name: string = '';
  price: number = 0;
  error: string | null = null;
  isValid: boolean = false;

  constructor(
    private updateProductUseCase: UpdateProductUseCase,
    private viewOneProductUseCase: ViewOneProductUseCase
  ) {
    makeAutoObservable(this);
  }

  onChangeName(name: string): void {
    this.name = name;
  }

  onChangePrice(price: number): void {
    this.price = price;
  }

  async doUpdateProduct(id: number): Promise<void> {
    this.error = null;
    if (this.name !== '' && this.price > 0) {
      const updatedProduct: ProductDTO = { id: id, name: this.name, price: this.price };
      try {
        const result = await this.updateProductUseCase.execute(id, updatedProduct);

        runInAction(() => {
          if (result) {
            this.isValid = true;
            console.log('Producto actualizado correctamente');
          } else {
            this.error = 'No se pudo actualizar la música';
          }
        });
      } catch (err: any) {
        runInAction(() => {
          this.error = err.message || "Error desconocido al actualizar la música";
        });
      }
    }
  }

  async loadProduct(id: number): Promise<void> {
    console.log('Cargando producto con ID:', id);
    try {
      const product = await this.viewOneProductUseCase.execute(id);
      console.log('Producto recibido de la API:', product);
  
      if (product) {
        runInAction(() => {
          this.name = product.name;
          this.price = product.price;
          console.log('Producto cargado correctamente:', {
            name: this.name,
            price: this.price
          });
        });
      } else {
        runInAction(() => {
          this.error = 'No se encontró el producto';
        });
        console.log('Error: No se encontró el producto');
      }
    } catch (err: any) {
      runInAction(() => {
        this.error = 'Error al cargar el producto.';
      });
    }
}

}