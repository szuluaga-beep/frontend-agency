import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../interfaces/product';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductService } from '../core/services/product-service.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() productInfo!: Product;

  constructor(private router: Router, private service: ProductService) { }

  editProduct(objeto: Product) {
    this.router.navigate(['/product', objeto.id]);
  }

  deleteProduct(product: Product) {
    this.service.deleteProduct(product.id).subscribe({
      next: (value) => {
        this.service.getProductsList()
      },
    })
  }
}
