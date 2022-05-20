import { Component, OnInit,Input } from '@angular/core';
import {Product} from './../../product.model'
import {cartObj } from './../../cartObj'
import { checkIfItemInCartAndReturnAmount,calculateTotalAmount} from './../../cartService'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product:Product|null =null
  @Input() page:string=''
  constructor() { }

  ngOnInit(): void {
    if(this.product){
      let amount =checkIfItemInCartAndReturnAmount(this.product.id)
      this.product.amount=amount?amount:1
    }
  }
  addToCart(product:Product){
  
    let amount =checkIfItemInCartAndReturnAmount(product.id)
    if(amount){
      if(amount==product.amount){
        alert('product already exist with same amount ')
        return
      }
      let index= cartObj.products.findIndex(x=>x.id==product.id)
      let check=confirm('Product already exist with amount '+amount+',Do you need to update amount to '+product.amount+' !')
      if(check)cartObj.products[index].amount= product.amount
      else product.amount =amount
    }
    else{
      let copy ={...product}
      if(cartObj.products)cartObj.products.push(copy)
      else cartObj.products=[copy]
      alert('added to Cart !')
    }
  }
  changeAmount(e:any,p:Product){
  
    if(this.page=='cart'){
      let index= cartObj.products.findIndex(x=>x.id==p.id)
      if(index>-1)cartObj.products[index].amount= p.amount
      calculateTotalAmount()
    }

  }
}
