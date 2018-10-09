import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headercomponent } from './header/header.component';
import { shirtscomponent } from './shirts/shirts.component';
import {salwarscomponent } from './salwars/salwars.component';
import {shoescomponent } from './shoes/shoes.component';
import {detailscomponent } from './details/details.component';
import {footercomponent } from './footer/footer.component';
import {slidescomponent} from './slides/slides.component';




import{RouterModule,Routes} from '@angular/router';
const approute:  Routes =[
  
  {path:'shirt',component:shirtscomponent},
  {path:'salwars',component:salwarscomponent},
  {path:'shirt',component:shoescomponent},
  {path:'details',component:detailscomponent},
  {path:'slides',component:slidescomponent},

];
@NgModule({
  declarations: [
    AppComponent,headercomponent,shirtscomponent,salwarscomponent,shoescomponent,detailscomponent,footercomponent,slidescomponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
