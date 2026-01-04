import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Data {
  private api = 'https://fakestoreapi.com/products';
  private personsApi = 'https://fakerapi.it/api/v1/persons';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  private personsSubject = new BehaviorSubject<any[]>([]);
  persons$ = this.personsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http.get<any[]>(this.api).subscribe(res => {
      this.productsSubject.next(res);
    });
  }

  loadPersons() {
    this.http.get<any>(this.personsApi).subscribe(res => {
      this.personsSubject.next(res.data);
    });
  }

  getProductById(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  getPersonById(id: number) {
    return this.http.get<any>(`${this.personsApi}/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.api}/${id}`).pipe(
      tap(() => {
        const updated = this.productsSubject.value.filter(p => p.id !== id);
        this.productsSubject.next(updated);
      })
    );
  }

  deletePerson(id: number) {
    return this.http.delete(`${this.personsApi}/${id}`).pipe(
      tap(() => {
        const updated = this.personsSubject.value.filter(p => p.id !== id);
        this.personsSubject.next(updated);
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

  updatePerson(id: number, person: any) {
    return this.http.put<any>(`${this.personsApi}/${id}`, person).pipe(
      tap(updatedPerson => {
        const persons = this.personsSubject.value.map(p =>
          p.id === id ? updatedPerson : p
        );
        this.personsSubject.next(persons);
      })
    );
  }
}
