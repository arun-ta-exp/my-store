import { Component } from '@angular/core';
// import { Product } from './models/Products';
// import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-store';


  // constructor(private productService: ProductService) {
  //   this.productService.getProducts()
  //     .subscribe((res: Product[]) => {
  //       this.products = res;
  //       console.log(res);
  //     }

  //     );
  // }
  constructor() { }
}
