import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiIntegModule } from './api-integ/api-integ.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http"
import {  NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // api-inte module
    ApiIntegModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
