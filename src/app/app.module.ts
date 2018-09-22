import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Assi1Component } from './assi1/assi1.component';
import { Assi2Component } from './assi2/assi2.component';
import { Assi3Component } from './assi3/assi3.component';
import { Assi4Component } from './assi4/assi4.component';
import { Assi5Component } from './assi5/assi5.component';
import { Assi6Component } from './assi6/assi6.component';
import { Assi7Component } from './assi7/assi7.component';
import { Assi1Q1Component } from './assi1/assi1-q1/assi1-q1.component';
import { Assi1Q2Component } from './assi1/assi1-q2/assi1-q2.component';
import { Assi1Q3Component } from './assi1/assi1-q3/assi1-q3.component';
import { Assi2Q1Component } from './assi2/assi2-q1/assi2-q1.component';
import { Assi2Q2Component } from './assi2/assi2-q2/assi2-q2.component';
import { Assi2Q3Component } from './assi2/assi2-q3/assi2-q3.component';
import { Assi2Q4Component } from './assi2/assi2-q4/assi2-q4.component';
import { Assi2Q5Component } from './assi2/assi2-q5/assi2-q5.component';
import { Assi3Q1Component } from './assi3/assi3-q1/assi3-q1.component';
import { Assi3Q2Component } from './assi3/assi3-q2/assi3-q2.component';
import { Assi3Q3Component } from './assi3/assi3-q3/assi3-q3.component';
import { Assi3Q4Component } from './assi3/assi3-q4/assi3-q4.component';
import { Assi3Q5Component } from './assi3/assi3-q5/assi3-q5.component';
import { Assi4Q1Component } from './assi4/assi4-q1/assi4-q1.component';
import { Assi4Q2Component } from './assi4/assi4-q2/assi4-q2.component';
import { Assi4Q3Component } from './assi4/assi4-q3/assi4-q3.component';
import { Assi4Q4Component } from './assi4/assi4-q4/assi4-q4.component';
import { Assi5Q1Component } from './assi5/assi5-q1/assi5-q1.component';
import { Assi5Q2Component } from './assi5/assi5-q2/assi5-q2.component';
import { Assi5Q3Component } from './assi5/assi5-q3/assi5-q3.component';
import { Assi6Q1Component } from './assi6/assi6-q1/assi6-q1.component';
import { Assi6Q2Component } from './assi6/assi6-q2/assi6-q2.component';
import { Assi7Q1Component } from './assi7/assi7-q1/assi7-q1.component';
import { Assi7Q2Component } from './assi7/assi7-q2/assi7-q2.component';
import { Assi7Q3Component } from './assi7/assi7-q3/assi7-q3.component';
import { Assi7Q4Component } from './assi7/assi7-q4/assi7-q4.component';
import { MarvellousComponent } from './assi2/assi2-q4/marvellous/marvellous.component';
import { FirstComponent } from './assi3/assi3-q1/first/first.component';
import { SecondComponent } from './assi3/assi3-q1/second/second.component';
import { ThirdComponent } from './assi3/assi3-q2/third/third.component';
import { ForthComponent } from './assi3/assi3-q2/forth/forth.component';
import { ChildComponent } from './assi4/assi4-q1/child/child.component';
import { OperatingComponent } from './assi4/assi4-q4/operating/operating.component';
import { ProgrammingLanguagesComponent } from './assi4/assi4-q4/programming-languages/programming-languages.component';
import { DatabasesComponent } from './assi4/assi4-q4/databases/databases.component';
import { ParentComponent } from './assi4/assi4-q1/parent/parent.component';
import { StudInfoComponent } from './assi4/assi4-q2/stud-info/stud-info.component';
import { BookdetailComponent } from './assi4/assi4-q3/bookdetail/bookdetail.component';
import { BooknameComponent } from './assi4/assi4-q3/bookname/bookname.component';
import { BookpriseComponent } from './assi4/assi4-q3/bookprise/bookprise.component';
import { CompFailureDirective } from './assi6/assi6-q1/comp-failure.directive';
import { CompSuccessDirective } from './assi6/assi6-q1/comp-success.directive';
import { CustomStyleDirective } from './assi6/assi6-q2/custom-style.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    AboutusComponent,
    ContactusComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    Assi1Component,
    Assi2Component,
    Assi3Component,
    Assi4Component,
    Assi5Component,
    Assi6Component,
    Assi7Component,
    Assi1Q1Component,
    Assi1Q2Component,
    Assi1Q3Component,
    Assi2Q1Component,
    Assi2Q2Component,
    Assi2Q3Component,
    Assi2Q4Component,
    Assi2Q5Component,
    Assi3Q1Component,
    Assi3Q2Component,
    Assi3Q3Component,
    Assi3Q4Component,
    Assi3Q5Component,
    Assi4Q1Component,
    Assi4Q2Component,
    Assi4Q3Component,
    Assi4Q4Component,
    Assi5Q1Component,
    Assi5Q2Component,
    Assi5Q3Component,
    Assi6Q1Component,
    Assi6Q2Component,
    Assi7Q1Component,
    Assi7Q2Component,
    Assi7Q3Component,
    Assi7Q4Component,
    MarvellousComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent,
    ChildComponent,
    OperatingComponent,
    ProgrammingLanguagesComponent,
    DatabasesComponent,
    ParentComponent,
    StudInfoComponent,
    BookdetailComponent,
    BooknameComponent,
    BookpriseComponent,
    CompFailureDirective,
    CompSuccessDirective,
    CustomStyleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,HttpClientModule,
    BrowserAnimationsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule,
    MatDatepickerModule,MatNativeDateModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
