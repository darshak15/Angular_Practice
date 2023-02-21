import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './api-integ/edit-form/edit-form.component';
import { FormArrayComponent } from './api-integ/form-array/form-array.component';
import { FormPostApiComponent } from './api-integ/form-post-api/form-post-api.component';
import { FormComponent } from './api-integ/form/form.component';
import { HomeComponent } from './api-integ/home/home.component';
import { ReactiveFormComponent } from './api-integ/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path : "home",
  },
  {
    component : FormComponent,
    path : "form",
  },
  {
    component : ReactiveFormComponent,
    path : "reactiveForm",
  },
  {
    component : FormPostApiComponent,
    path : "postAPIForm",
  },
  {
    component : EditFormComponent,
    path : "editForm",
  },
  {
    component : FormArrayComponent,
    path : "formArray",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
