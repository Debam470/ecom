import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.scss']
})
export class ViewimageComponent implements OnInit {

  contentData = { heading1: '', content1: '', button1:'' , heading2: '', content2: '', button2:''}

  constructor() { 
    
  }

  ngOnInit() {
    this.content();
  }

  content(){
    this.contentData.heading1 = 'THE PERFECT GIFT';
    this.contentData.heading2 = 'START GIFTING !';
    this.contentData.content1 = 'Shop one of our favorite gift ideas for 2020! Our new denim jacket with a removable faux fur collar will be her new go-to style! Grab this chic jacket before it sells out!';
    this.contentData.content2 = 'No clue what to get the girl who has everything? Check out The Holiday Shop at Dress Up! We have the best gift ideas for you! One of our favorite gift ideas for her is a cozy sweater! She will LOVE you for it!';
    this.contentData.button1 = 'SHOP OUTERWEAR';
    this.contentData.button2 = 'THE HOLIDAY SHOP';
    
  }

}
