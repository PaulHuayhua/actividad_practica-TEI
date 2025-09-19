import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product';
import { ProductInterface } from '../../core/interfaces/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, MatIconModule],
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class Product implements OnInit {
  products: ProductInterface[] = [];
  filteredProducts: ProductInterface[] = [];
  cart: ProductInterface[] = [];
  showCart = false;
  searchTerm: string = '';
  selectedCategory: string = '';

  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
    this.categories = [...new Set(this.products.map(p => p.category))];
  }

  addToCart(product: ProductInterface): void {
    this.cart.push(product);
  }

  removeFromCart(product: ProductInterface): void {
    this.cart = this.cart.filter(item => item.id !== product.id);
  }

  toggleCartModal(): void {
    this.showCart = !this.showCart;
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => {
      const price = item.discount ? item.price * (1 - item.discount / 100) : item.price;
      return sum + price;
    }, 0);
  }

  confirmPurchase(): void {
    if (!this.cart.length) return;
    alert(`Compra confirmada! Total: ${this.getTotal().toFixed(2)} PEN`);
    this.cart = [];
    this.showCart = false;
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(p => {
      const matchesCategory = this.selectedCategory ? p.category === this.selectedCategory : true;
      const matchesSearch = this.searchTerm ? p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    });
  }
}
