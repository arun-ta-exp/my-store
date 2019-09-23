import { Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  products: Product[] = [
    {
      Name: `Boat-Head 1`,
      description: `Feel the clarity`,
      image: `https://hniesfp.imgix.net/8/images/detailed/139/MRQC2ZMA.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress`,
      alt: `headphone`,
      isAvailable: false
    },
    {
      Name: `Boat-Head 2`,
      description: `Feel the clarity`,
      image: `https://images-na.ssl-images-amazon.com/images/I/61YvHa6o94L._SL1500_.jpg`,
      alt: `headphone`,
      isAvailable: true
    }
  ];
  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }
}
