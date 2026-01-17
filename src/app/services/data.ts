import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Data {
  currentUser: any = null;
  private productsUrl = 'https://fakestoreapi.com/products';
  private personsUrl = 'https://fakerapi.it/api/v1/persons';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  private personsSubject = new BehaviorSubject<any[]>([]);
  persons$ = this.personsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http.get<any[]>(this.productsUrl).subscribe({
      next: (data) => this.productsSubject.next(data),
      error: (err) => console.error('Could not load products', err)
    });
  }

  loadPersons() {
    this.http.get<any>(this.personsUrl).subscribe({
      next: (res) => this.personsSubject.next(res.data),
      error: (err) => console.error('Could not load persons', err)
    });
  }

  getProductById(id: number) {
    return this.http.get<any>(`${this.productsUrl}/${id}`);
  }

  getPersonById(id: number) {
    return this.http.get<any>(`${this.personsUrl}/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productsUrl}/${id}`).pipe(
      tap(() => {
        const list = this.productsSubject.value.filter(p => p.id !== id);
        this.productsSubject.next(list);
      })
    );
  }

  deletePerson(id: number) {
    return this.http.delete(`${this.personsUrl}/${id}`).pipe(
      tap(() => {
        const list = this.personsSubject.value.filter(p => p.id !== id);
        this.personsSubject.next(list);
      })
    );
  }

  updateProduct(id: number, product: any) {
    return this.http.put<any>(`${this.productsUrl}/${id}`, product).pipe(
      tap(updated => {
        const list = this.productsSubject.value.map(p => p.id === id ? updated : p);
        this.productsSubject.next(list);
      })
    );
  }

  updatePerson(id: number, person: any) {
    return this.http.put<any>(`${this.personsUrl}/${id}`, person).pipe(
      tap(updated => {
        const list = this.personsSubject.value.map(p => p.id === id ? updated : p);
        this.personsSubject.next(list);
      })
    );
  }
}
