import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  formData = {title0: '', title1: '', title2: '', title3: ''};
  constructor() { }

  ngOnInit() {
    this.formData.title0 = 'PURCHASE ANY THREE ITEMS GET 20% OFF | NO CODE NEEDED';
    this.formData.title1 = 'AVOID SHIPPING DELAYS & ORDER EARLY';
    this.formData.title2 = 'BUY ONLINE & PICK UP IN STORES NOW';
    this.formData.title3 = 'CALL US AT 678.989.2006 TO TALK TO A STYLIST';  
  }
}
