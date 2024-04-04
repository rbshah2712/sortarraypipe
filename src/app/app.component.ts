import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortarraypipe';
  items = [
    {
      name:'TV',
      price:2000
   },
   {
      name:'Freeze',
      price:500
  },
  
    {
      name:'Mobile',
      price:1500
    }
  
];
}
