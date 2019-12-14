import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../store/actions';


export interface Product {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
  UnitsInStock: number;
  DeliveryOn: Date;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {}


  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() {}
}
