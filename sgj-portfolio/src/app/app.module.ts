import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageComponent,
    ContactComponent,
    WorkexperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxHideOnScrollModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
