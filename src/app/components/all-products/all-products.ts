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

  isModalOpen = false;
  selectedProducts: any =null;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.dataService.loadProducts();
    this.products$ = this.dataService.products$;
  }

  openModal(product: any) {
    this.isModalOpen = true;
    this.selectedProducts = product;
  }
  closeModal() {
    this.isModalOpen = false;
    this.selectedProducts = null;
  }

  delete(id: number) {
    this.dataService.deleteProduct(id).subscribe();
  }
}
