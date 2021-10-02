import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
  public isAuthenticated: boolean = false;
  constructor() { }

  public cars = ['BMW','Honda','Ford','Tesla','Audi']

  ngOnInit(): void {
  }

}
