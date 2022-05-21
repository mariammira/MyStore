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
removeProduct(product_id:number){
  let check=confirm('Are you sure you want to delete this item ') 
  
  if(check){
    
    let index = cartObj.products.findIndex(x=>x.id==product_id)
    if(index>-1) cartObj.products.splice(index,1)
    calculateTotalAmount();
  }
}
changeAmount(p:any){

    let index= cartObj.products.findIndex(x=>x.id==p.id)
    if(index>-1)cartObj.products[index].amount= p.amount
    calculateTotalAmount()

  }
}
