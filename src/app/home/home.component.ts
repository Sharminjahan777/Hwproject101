import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  imageUrl = 'https://images.app.googl/ocmennLEwqZX4GmF8';
  public title = "This is the homepage";
  public name = "Jahan";
  public duration = 10;
  isActive = false;
  isAuthenticated = true;
  actionName = "Aria enhancement";
  destinationUrl = 'http://google.com';
  alternativeUrl = 'In case google doesnt work, try withhttp://bing.com';
  public userName: any;
  public clickCounter = 0;
  public isSpecial = true;
  public applystyle = true;

  ngOnInit(): void {
  }

  onClick() {
    this.clickCounter ++;
    console.log('user just clicked');
  }
  toggleColor(){
    
  }
  onKeyPressed(event : any){
    console.log ('User pressed the ',event.key);
    }
  }


