import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Data {
  private api = 'https://fakestoreapi.com/products';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http.get<any[]>(this.api).subscribe(res => {
      this.productsSubject.next(res);
    });
  }

  getProductById(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.api}/${id}`).pipe(
      tap(() => {
        const updated = this.productsSubject.value.filter(p => p.id !== id);
        this.productsSubject.next(updated);
      })
    );
  }

  updateProduct(id: number, product: any) {
    return this.http.put<any>(`${this.api}/${id}`, product).pipe(
      tap(updatedProduct => {
        const products = this.productsSubject.value.map(p =>
          p.id === id ? updatedProduct : p
        );
        this.productsSubject.next(products);
      })
    );
  }
}
