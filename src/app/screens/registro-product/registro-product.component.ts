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
  productId: string | null = null;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.productService
        .getProductById(this.productId)
        .subscribe((product) => {
          if (product) {
            this.productForm.patchValue(product); // Llena el formulario
          }
        });
    }
  }

  guardarProducto() {
    if (this.productForm.valid) {
      const nuevoProducto = this.productForm.value;

      if (this.productId) {
        // Editar producto existente
        this.productService
          .updateProduct(this.productId, nuevoProducto)
          .then(() => {
            console.log('Producto actualizado correctamente');
          })
          .catch((error) => {
            console.error('Error al actualizar el producto:', error);
          });
      } else {
        // Crear nuevo producto
        this.productService
          .addProduct(nuevoProducto)
          .then(() => {
            console.log('Producto guardado correctamente');
            this.productForm.reset();
          })
          .catch((error) => {
            console.error('Error al guardar el producto:', error);
          });
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}
