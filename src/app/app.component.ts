import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, MenuComponent, HomeComponent,ProductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  productData:any;
  constructor(private dataSet:DataServiceService){


  };

  componentFlag:boolean=true;
  title = 'Burger-Queen';


 fetchedData(data:{ type: string; numberInd: number }){
    if (data.type === 'popular') {
      this.productData = this.dataSet.list.popular[data.numberInd]; 
    } else if (data.type === 'special') {
      this.productData = this.dataSet.list.special[data.numberInd]; 
    } else if (data.type === 'new') {
      this.productData = this.dataSet.list.new[data.numberInd]; 
    }
    this.componentFlag=false;
  }
}
