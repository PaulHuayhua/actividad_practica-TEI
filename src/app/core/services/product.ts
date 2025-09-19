import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductInterface[] = [
    {
      id: 1,
      name: 'Laptop Gamer',
      description: 'Laptop potente para juegos y trabajo.',
      price: 3500,
      imageUrl: 'assets/laptop.jpg',
      category: 'Tecnología',
      stock: 10,
      rating: 4.5,
      discount: 10,
      tags: ['gaming', 'oferta']
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      description: 'Teléfono de última generación con gran cámara.',
      price: 2800,
      imageUrl: 'assets/smartphone.jpg',
      category: 'Tecnología',
      stock: 25,
      rating: 4.8,
      tags: ['nuevo', 'top']
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos',
      description: 'Sonido de alta calidad con cancelación de ruido.',
      price: 450,
      imageUrl: 'assets/auriculares.jpg',
      category: 'Accesorios',
      stock: 40,
      rating: 4.2,
      tags: ['accesorio', 'audio']
    }
  ];

  constructor() {}

  getProducts(): ProductInterface[] {
    return this.products;
  }

  getProductById(id: number): ProductInterface | undefined {
    return this.products.find(p => p.id === id);
  }
}
