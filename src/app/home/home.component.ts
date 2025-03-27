import { Component, EventEmitter, Output, output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  dataPopular: any[];
  dataSpecial: any[];
  new: any[];
  @Output() detailEmitter= new EventEmitter<{type:string,numberInd:number}>()

  btntextPopular: string[] = [];
  btntextSpecial: string[] = [];
  btntextNew: string[] = [];

  constructor(private dataSet: DataServiceService) {
    this.dataPopular = this.dataSet.list.popular;
    this.dataSpecial = this.dataSet.list.special;
    this.new = this.dataSet.list.new;

    // Initialize button text for each item in each section
    this.btntextPopular = new Array(this.dataPopular.length).fill("Add to Cart");
    this.btntextSpecial = new Array(this.dataSpecial.length).fill("Add to Cart");
    this.btntextNew = new Array(this.new.length).fill("Add to Cart");
  }

  // Add to Cart functionality
  addCart(index: number, category: string, event: Event) {
    switch (category) {
      case 'popular':
        this.btntextPopular[index] = (this.btntextPopular[index]=="Item Added")?"Add to Cart":"Item Added";
        break;
      case 'special':
        this.btntextSpecial[index] = (this.btntextSpecial[index]=="Item Added")?"Add to Cart":"Item Added";
        
        break;
      case 'new':
        this.btntextNew[index] = (this.btntextNew[index]=="Item Added")?"Add to Cart":"Item Added";
        break;
    }

   
    (event.target as HTMLElement).classList.toggle("btn-change");
  }

  viewDetails(index: number, category: string) {
    this.detailEmitter.emit({ type: category, numberInd: index });
  }
}
