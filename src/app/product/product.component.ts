import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  products = [];

  constructor(
    private dataService : DataService
  ) {
    this.products = this.dataService.products;
   }

  ngOnInit() {}

}
