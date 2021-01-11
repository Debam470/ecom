import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerData = { signin: '', register: '', search: '', greet: '', customerName: ''}
  theHolidayShop = ['Holiday', 'Sweat Shirt under $399', 'Cozy Gifts', 'Gifts  under $20', 'Gifts  under $40', 'Stocking stuffers' ] as any;
  newArrivals = ['Restocks', 'New tops', 'New sweaters', 'New bottoms', 'New accessories', 'Bestsellers'] as any;
  clothings = ['All tops', 'All Bottoms', 'Shop by trend', 'Collections', 'Season cloths', 'Sports'] as any;
  more = ['About Us', 'Contact Us', 'Careers', 'Locations', 'Blogs', 'Helpline'] as any;
  constructor() { }

  ngOnInit() {
    this.greetData();
    this.theHolidayShopDataBinding();
  }

  theHolidayShopDataBinding() {
    this.customerData.signin = 'Sign In';
    this.customerData.register = 'Register';
    this.customerData.search = 'Search';
    this.customerData.customerName = 'Debam Debasis';
  }

  greetData() {
    var myDate = new Date();
    if (myDate.getHours() < 12) {
      this.customerData.greet = 'Good Morning';
    }
    else if (myDate.getHours() >= 12 && myDate.getHours() <= 16) {
      this.customerData.greet = 'Good Afternoon';
    }
    else if (myDate.getHours() > 16 && myDate.getHours() <= 24) {
      this.customerData.greet = 'Good Evening';
    }
    else {
      this.customerData.greet = 'Good Night';
    }
  }

  search(){

  }
}

