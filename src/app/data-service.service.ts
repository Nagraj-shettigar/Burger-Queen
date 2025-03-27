import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  constructor() { }

list:any = {
   special: [
      {name:"Cheese Rich Burger", price:"$8.90", img:"/assets/burgers/BBQ.jpg"},
      {name:"BBQ Bacon Burger", price:"$5.90", img:"/assets/burgers/Classic.jpeg"}
   ],
   popular: [
      {name:"Spicy Crispy Burger", price:"$12.90", img:"/assets/special3.jpg"},
      {name:"Grilled Chicken Burger", price:"$6.90", img:"/assets/burgers/Patty.webp"}
   ],
   new: [
      {name:"Veggie Treat Burger", price:"$3.90", img:"/assets/burgers/Veg.jpg"},
      {name:"Double Patty Burger", price:"$4.90", img:"/assets/burgers/Beef.jpg"},
      {name:"Classic Cheeseburger", price:"$0.90", img:"/assets/burgers/Classic.jpeg"}
   ]
};

}
