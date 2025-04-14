import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  docData,
} from '@angular/fire/firestore';
import { Product } from '../../types/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fireStore: Firestore) {}

  // Agregar un producto
  addProduct(product: Product) {
    const productsRef = collection(this.fireStore, 'products');
    return addDoc(productsRef, product);
  }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    const productsRef = collection(this.fireStore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }

  // Obtener un producto por ID
  getProductById(id: string): Observable<Product | undefined> {
    const productRef = doc(this.fireStore, 'products', id);
    return docData(productRef, { idField: 'id' }) as Observable<
      Product | undefined
    >;
  }

  // Actualizar un producto
  updateProduct(id: string, updatedProduct: Product) {
    const productRef = doc(this.fireStore, 'products', id);
    return updateDoc(productRef, updatedProduct);
  }

  // Eliminar un producto
  deleteProduct(id: string) {
    const productRef = doc(this.fireStore, 'products', id);
    return deleteDoc(productRef);
  }
}
