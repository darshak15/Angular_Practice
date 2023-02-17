import { Component } from '@angular/core';
import {  FormControl ,FormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  loginForm = new FormGroup({
    firstname : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required , Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),

  })
 loginData(){
  console.log(this.loginForm.value);
 }
 get firstname(){
  return this.loginForm.get('firstname')
 }
 get email(){
  return this.loginForm.get('email')
 }
 get password(){
  return this.loginForm.get('password')
 }


}
