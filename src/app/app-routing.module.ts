import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackComponent} from './feedback/feedback.component';
import {HeaderComponent} from './header/header.component';
import {ContactusComponent} from './contactus/contactus.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { Assi1Component } from './assi1/assi1.component';
import { Assi2Component } from './assi2/assi2.component';
import { Assi3Component } from './assi3/assi3.component';
import { Assi4Component } from './assi4/assi4.component';
import { Assi5Component } from './assi5/assi5.component';
import { Assi6Component } from './assi6/assi6.component';
import { Assi7Component } from './assi7/assi7.component';
import {ErrorComponent}from './error/error.component' ;
const routes: Routes = [



  { path: '' , component: HeaderComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'assi1', component: Assi1Component},
  { path: 'assi2', component: Assi2Component},
  { path: 'assi3', component: Assi3Component},
  { path: 'assi4', component: Assi4Component},
  { path: 'assi5', component: Assi5Component},
  { path: 'assi6', component: Assi6Component},
  { path: 'assi7', component: Assi7Component},
  { path: 'error', component: ErrorComponent },

 










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
