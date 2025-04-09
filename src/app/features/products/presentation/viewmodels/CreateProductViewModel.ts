import { makeAutoObservable, runInAction } from "mobx";
import { ProductDTO } from "../../data/dtos/product.DTO";
import { AgregateProductUseCase } from "../../domain/agregate-product.usecase";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CreateProductViewModel {
  name: string = '';
  price: GLfloat = 0;
  error: string | null = null;
  isValid = false;
  agregateProductUseCase: AgregateProductUseCase;

  constructor(agregateProductUseCase: AgregateProductUseCase) {
    makeAutoObservable(this);
    this.agregateProductUseCase = agregateProductUseCase;
}

  onChangeName(name: string) {
    this.name = name;
  }

  onChangePrice(price: GLfloat) {
    this.price = price;
  }

  async doCreateProduct() {
    this.error = null;  
    if (this.name !== "" && this.price !== 0) {
      let product: ProductDTO = {id: 0, name: this.name, price: this.price };
      
      try {
        let data = await this.agregateProductUseCase.execute(product);
        
        runInAction(() => {
          if (data != null) {
            this.isValid = true;  
          }
        });
      } catch (err: any) {
        runInAction(() => {
          this.error = err.message || "Error al crear el producto";
        });
      }
    } else {
      this.error = "Por favor, complete todos los campos";
    }
  }
}
