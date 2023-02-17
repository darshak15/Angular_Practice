import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormPostApiComponent } from './form-post-api/form-post-api.component'


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    ReactiveFormComponent,
    FormPostApiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeComponent,
    FormComponent,
    ReactiveFormComponent,
    FormPostApiComponent,
  ]
})
export class ApiIntegModule { }
