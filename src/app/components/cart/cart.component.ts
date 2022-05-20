import { Component, OnInit } from '@angular/core';
import {cartObj } from './../../cartObj'
import  {Router} from '@angular/router';
import {calculateTotalAmount} from './../../cartService'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }
  cartObj=cartObj
  ngOnInit(): void {
    calculateTotalAmount();
  }
submitOrder(){
  this.router.navigate(['/confirmation'])
}

}
