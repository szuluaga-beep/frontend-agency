import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input('id') idProduct!: number;

  public formBuild = inject(FormBuilder);

  public formProduct: FormGroup = this.formBuild.group({
    name: [''],
    description: [''],
    image_url: [''],
    price: [0]
  });

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    if (this.idProduct != 0) {
      this.service.getProductById(this.idProduct).subscribe({
        next: (data) => {
          this.formProduct.patchValue({
            name: data.name,
            description: data.description,
            image_url: data.image_url,
            price: data.price
          })
        },
      })
    }
    throw new Error('Method not implemented.');
  }
}
