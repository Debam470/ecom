import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  @ViewChild('wrapper', {static: true}) template: TemplateRef<any>;
  constructor(public dialog: MatDialog, private router: Router) { }
  createAccountData = {
  header: '', 
  email:'', 
  confirmPassword: '', 
  firstName: '', 
  companyName: '', 
  addressLine1: '', 
  city: '',                  
  state: '',
  password :'',
  birthMonth: '',
  lastaName: '',
  phoneNumber: '',
  addressLine2: '',
  country: '',
  zipCode: '',
 };
  
  ngOnInit(): void {
    this.creatAccountHeaders();
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(this.template, { data: {} });
  }

  onCancel() {
    this.router.navigate(['./']);
    this.dialog.closeAll();
  }
  creatAccountHeaders(){
    this.createAccountData.header = 'Create Account';
    this.createAccountData.email = 'Email Address';
    this.createAccountData.confirmPassword = ' Cofirm Password';
    this.createAccountData.firstName = 'First Name';
    this.createAccountData.companyName = 'Company Name';
    this.createAccountData.addressLine1 = 'Address Line 1';
    this.createAccountData.city = 'City';
    this.createAccountData.state = 'State';
    this.createAccountData.password = 'Password';
    this.createAccountData.birthMonth = 'Date of Birth';
    this.createAccountData.lastaName = 'Last Name';
    this.createAccountData.phoneNumber = 'Phone Number';
    this.createAccountData.addressLine2 = 'Address Line 2';
    this.createAccountData.country = 'Country';
    this.createAccountData.zipCode = 'Zip/PostCode';
  }
}
