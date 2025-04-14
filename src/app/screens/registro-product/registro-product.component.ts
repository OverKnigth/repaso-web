import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-product.component.html',
  styleUrl: './registro-product.component.css',
})
export class RegistroProductComponent {
  productForm: FormGroup;
  productId: string | null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });

    // Si hay ID, es edición
    if (this.productId) {
      this.productService
        .getProductById(this.productId)
        .subscribe((product) => {
          if (product) this.productForm.patchValue(product);
        });
    }
  }

  guardarProducto() {
    if (this.productForm.invalid) return;

    const data = this.productForm.value;

    if (this.productId) {
      this.productService
        .updateProduct(this.productId, data)
        .then(() => console.log('Producto actualizado'))
        .catch((err) => console.error('Error al actualizar:', err));
    } else {
      this.productService
        .addProduct(data)
        .then(() => {
          console.log('Producto guardado');
          this.productForm.reset();
        })
        .catch((err) => console.error('Error al guardar:', err));
    }
  }
}
