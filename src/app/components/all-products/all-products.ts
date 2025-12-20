import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-products.html',
})
export class AllProducts implements OnInit {
  products$!: Observable<any[]>;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.dataService.loadProducts();
    this.products$ = this.dataService.products$;
  }

  delete(id: number) {
    this.dataService.deleteProduct(id).subscribe();
  }
}
