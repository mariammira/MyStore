import { Component, OnInit } from '@angular/core';
import {cartObj } from './../../cartObj'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cartObj=cartObj
  constructor() { }

  ngOnInit(): void {
  }

}
