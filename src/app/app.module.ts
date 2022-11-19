import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import * as path from "path";
import {HttpClientModule} from "@angular/common/http";

const  appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactsComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
