import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrlBase}/products`)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrlBase}/products/${id}`)

  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrlBase}/products/${id}`);
  }
}
