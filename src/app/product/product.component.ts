import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod;

  constructor(private router: Router) { }

  // addToCart() {
  //   console.log("clicked");
  // }
  // buy() {
  //   console.log("bought");
  // }
  tocheckOut(){
    this.router.navigate(['checkout']);
  }
  ngOnInit() {
  }

}
