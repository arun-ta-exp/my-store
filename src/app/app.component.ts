import { Component } from '@angular/core';
import { Product } from './models/Products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-store';
  products: Product[] = [];
  productComponent: Product = {
    Name: `Boat-Head 1`,
    description: `Feel the clarity`,
    image: `https://hniesfp.imgix.net/8/images/detailed/139/MRQC2ZMA.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress`,
    alt: `headphone`,
    isAvailable: false
  };
  secondProduct: Product = {
    Name: `Boat-Head 2`,
    description: `Feel the clarity`,
    image: `https://images-na.ssl-images-amazon.com/images/I/61YvHa6o94L._SL1500_.jpg`,
    alt: `headphone`,
    isAvailable: true
  };
  constructor(private productService: ProductService) {
    this.productService.getProducts()
      .subscribe((res: Product[]) => {
        this.products = res;
        console.log(res);
      }

      );
  }

}
