import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDTO } from '../dtos/product.DTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.baseUrl);
  }

  getById(id: number): Observable<ProductDTO> {
    console.log(`Fetching product with ID: ${id}`);
    return this.http.get<ProductDTO>(`${this.baseUrl}/${id}`);
  }

  create(product: ProductDTO): Observable<ProductDTO> {
    return this.http.post<ProductDTO>(this.baseUrl, product);
  }

  update(id: number, product: ProductDTO): Observable<ProductDTO> {
    return this.http.put<ProductDTO>(`${this.baseUrl}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}