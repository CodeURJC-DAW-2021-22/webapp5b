import { APP_ID, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [{
    "id":1,
    "name":"XCosa",
    "price":100
  },{
    "id":1,
    "name":"XCosa",
    "price":100
  },{
    "id":1,
    "name":"XCosa",
    "price":100
  }]
  constructor() { }

  ngOnInit(): void {
  }

  getProducts(){
       
  }

}
