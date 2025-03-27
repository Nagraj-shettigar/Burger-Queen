import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
name:any;
stockData:any;
rating:any;
price:any;
@Input() productData:any;

ngOnChanges(changes: SimpleChanges) {
  if (changes['productData'] && changes['productData'].currentValue) {
    this.name = this.productData.name;
    this.stockData='In Stock';
    this.rating='* * * * *' ;
    this.price=this.productData.price;
  }
}
}
