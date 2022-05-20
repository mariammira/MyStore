import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import {Product} from './../../product.model'
import  {Router} from '@angular/router'
import {cartObj } from './../../cartObj'
import { checkIfItemInCartAndReturnAmount} from './../../cartService'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[]
  constructor(private httpService: HttpService,
              private router:Router) { }
  ngOnInit(): void {
    this.products =this.httpService.getUsers()
    if(cartObj.products){
      for(let item of this.products){
        let amount =checkIfItemInCartAndReturnAmount(item.id)
        item.amount=amount?amount:1
      }
    }

  }
  selectProduct(product:Product){
    this.router.navigate(['/edit',product.id])

  }
  addToCart(product:Product){
    cartObj.totalAmount=23
    if(cartObj.products)cartObj.products.push(product)
    else cartObj.products=[product]
    
  }
}
