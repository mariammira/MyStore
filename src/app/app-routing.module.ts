import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule,} from '@angular/router'

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes :Routes =[
  {path:'',component:ProductListComponent},
  {path:'edit/:id',component:ProductItemComponent},
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent},
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
