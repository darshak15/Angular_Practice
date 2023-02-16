import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './api-integ/form/form.component';
import { HomeComponent } from './api-integ/home/home.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path : "home",
  },
  {
    component : FormComponent,
    path : "form",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
