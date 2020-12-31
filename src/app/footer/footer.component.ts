import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  quickLinks = { Quicks: '', FAQs: '', Shipping: '', Return:'' , ContactUs: '', afterPay: ''}
  aboutDressUp= { aboutDress: '', ourStory: '', careers: '', collaborations:'' , campusProg: '', blog: '' }
  Shopping= { getShopping: '', arrivals: '', careers: '', accessory:'' , sales: '', gifts: '' }
  connect= {connectUs: ''}
  constructor() { 
    
  }

  ngOnInit() {
    this.footerData();
    this.dressUpData();
    this.shoppingData();
    this.connectData();
  }
  footerData(){
    this.quickLinks.Quicks = 'Quick Links';
    this.quickLinks.FAQs = 'FAQs';
    this.quickLinks.Shipping = 'Shipping';
    this.quickLinks.Return = 'Return';
    this.quickLinks.ContactUs = 'ContactUs';
    this.quickLinks.afterPay = 'AfterPay';
  }
  dressUpData(){
    this.aboutDressUp.aboutDress = 'ABOUT DRESS UP';
    this.aboutDressUp.ourStory = 'Our story + Mission';
    this.aboutDressUp.careers = 'Careers';
    this.aboutDressUp.collaborations = 'Collaborations';
    this.aboutDressUp.campusProg = 'Campus Rep Programme';
    this.aboutDressUp.blog = 'Blog';
  }
  shoppingData(){
    this.Shopping.getShopping = 'New Arrivals';
    this.Shopping.arrivals = 'Clothings';
    this.Shopping.careers = 'Accessories';
    this.Shopping.accessory = 'Collaborations';
    this.Shopping.sales = 'Sale';
    this.Shopping.gifts = 'Gift Cards';
  }
  connectData(){
    this.connect.connectUs = 'CONNECT WITH US';
  }
}
