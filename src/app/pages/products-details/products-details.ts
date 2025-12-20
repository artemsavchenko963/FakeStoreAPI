import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-details.html',
})
export class ProductDetails implements OnInit {
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private dataService: Data,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getProductById(id).subscribe(res => {
      this.product = res;
    });
  }

  update() {
    this.dataService
      .updateProduct(this.product.id, this.product)
      .subscribe(() => {
        alert('Updated!');
      });
  }

  back() {
    this.router.navigate(['/']);
  }
}
