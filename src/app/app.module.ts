import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { BodyComponent } from './body/body.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './customer/signin/signin.component';
import { CreateaccountComponent } from './customer/createaccount/createaccount.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    BodyComponent,
    ViewimageComponent,
    FooterComponent,
    SigninComponent,
    CreateaccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


