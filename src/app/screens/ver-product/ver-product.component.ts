import { Component } from '@angular/core';
import { Product } from '../../types/products';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-product',
  standalone: true,
  imports: [],
  templateUrl: './ver-product.component.html',
  styleUrl: './ver-product.component.css',
})
export class VerProductComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  eliminarProducto(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(id).then(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }

  editarProducto(id: string) {
    this.router.navigate(['/registro-product', id]);
  }
}
