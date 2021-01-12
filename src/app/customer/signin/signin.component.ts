import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent  implements OnInit {

  @ViewChild('wrapper', {static: true}) template: TemplateRef<any>;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(this.template, { data: {} });
  }

  onCancel() {
    this.router.navigate(['./']);
    this.dialog.closeAll();
  }
  createaccount(){
    this.router.navigate(['./signin/createaccount']);
    this.dialog.closeAll();
  }
}

