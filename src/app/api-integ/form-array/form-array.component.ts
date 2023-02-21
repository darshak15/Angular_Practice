import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent {
  // create formgruop and add lesson array
  form: any = new FormGroup({
    lesson: new FormArray([new FormControl(null, Validators.required)]),
  });
  constructor(private fb: FormBuilder) {}
// validation function
  get validate() {
    return this.form.get('lesson');
  }
  // add lesson data
  addLesson() {
    this.form.get('lesson').push(new FormControl(null, Validators.required));
  }
// delete lesson data
  deleteLesson(index: any): void {
    alert('Are you sure you want to delete data');
    this.form.get('lesson').controls.splice(index, 1);
  }
  // submit all array data
  submitdata() {
    console.log(this.form.value);
    alert('Data Successfully Submited');
    this.form.reset();
  }
}
