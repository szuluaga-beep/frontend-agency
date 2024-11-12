import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductService } from '../core/services/product-service.service';
import { AsyncPipe } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public productList$!: Observable<Product[]>

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductsList().pipe()

  }
}
