import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormPostApiComponent } from './form-post-api/form-post-api.component';
import { RouterModule } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormArrayComponent } from './form-array/form-array.component';




@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    ReactiveFormComponent,
    FormPostApiComponent,
    EditFormComponent,
    FormArrayComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    HomeComponent,
    FormComponent,
    ReactiveFormComponent,
    FormPostApiComponent,
   EditFormComponent,
   FormArrayComponent,
   
  ]
})
export class ApiIntegModule { }
