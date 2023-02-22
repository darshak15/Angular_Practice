import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-attendence-data',
  templateUrl: './attendence-data.component.html',
  styleUrls: ['./attendence-data.component.css'],
})
export class AttendenceDataComponent {
  success: any = '';
  error: any = '';

  constructor(private fb: FormBuilder, private sendData: UserDataService) {}

  attendece_form: any = new FormGroup({
    date: new FormControl('', Validators.required),
    in_time: new FormArray([]),
    out_time: new FormArray([]),
    log_type: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });
  submitAllData() {
    if (this.attendece_form.invalid) {
      alert('please cheak form');
    } else {
      if (this.attendece_form.value.in_time == '' || this.attendece_form.value.in_time == '') {
        this.error = true;
      } else {
        let puncharr: any = [];
        for (let i = 0; i < this.attendece_form.value.in_time.length; i++) {
          puncharr.push({
            attendance_type: this.attendece_form.value.log_type,
            attendance_datetime: this.intimecall(i),
          });
        }
        for (let i = 0; i < this.attendece_form.value.out_time.length; i++) {
          puncharr.push({
            attendance_type: this.attendece_form.value.log_type,
            attendance_datetime: this.outtimecall(i),
          });
        }
        console.log('date', this.attendece_form.value.date + this.attendece_form.value.in_time);
        let postobj: any = {
          log_type: this.attendece_form.value.log_type,
          punch: puncharr,
          reason: this.attendece_form.value.reason,
          user_id: '620a423ef63cee0008ef41b6',
        };

        this.sendAtteData(postobj);
        // this.attendece_form.reset()
      }
    }
  }
  intimecall(i: any) {
    let new_s: string = this.attendece_form.value.in_time[i];

    let hr = new_s.split(':');

    let year = this.attendece_form?.value.date.split('-');
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0);
    date = new Date(date).setFullYear(
      parseInt(year[0]),
      parseInt(year[1]) - 1,
      parseInt(year[2])
    );
    return this.getDate(date);
  }
  outtimecall(i: any) {
    let new_s: string = this.attendece_form?.value.out_time[i];
    let hr = new_s.split(':');
    let year = this.attendece_form.value.date.split('-');
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0);
    date = new Date(date).setFullYear(
      parseInt(year[0]),
      parseInt(year[1]) - 1,
      parseInt(year[2])
    );
    return this.getDate(date);
  }
  //   add in time
  addIntime() {
    this.attendece_form.get('in_time').push(new FormControl('', Validators.required));
  }
  //   add out time
  addOuttime() {
    this.attendece_form.get('out_time').push(new FormControl('', Validators.required));
  }
  //   delet in time efield
  deleteIntime(i: any) {
    this.attendece_form.get('in_time').controls.splice(i, 1);
  }
  //  delet out time efield
  deleteOuttime(i: any) {
    this.attendece_form.get('out_time').controls.splice(i, 1);
  }
  // function for api oe send data to api
  sendAtteData(myobj: any) {
    this.sendData.attendenceData(myobj).subscribe((res: any) => {
      console.log(res);
      this.success = true;
      this.error = false;
    });
  }
  // get Date Function to set data value as in api
  getDate(date: any) {
    return moment(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.sssZ');
  }
}
