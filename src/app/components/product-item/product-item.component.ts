import { Component, OnInit ,Input } from '@angular/core';
import {Product} from './../../product.model'
import { HttpService } from './../../http.service';
import  {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product:Product|null =null
constructor(private httpService: HttpService,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id'])
      this.product =this.httpService.getUserByID(+this.route.snapshot.params['id'])
  }

}
