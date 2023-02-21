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
  //   attendece_form: any = new FormGroup({
  //     // declare all form name and form array
  //     log_type: new FormControl('', Validators.required),
  //     date: new FormControl('', Validators.required),
  //     intime: new FormArray([new FormControl('', Validators.required)]),
  //     outtime: new FormArray([new FormControl('', Validators.required)]),
  //     reason: new FormControl('', Validators.required),
  //   });
  //   attendata(){
  //     if(this.attendece_form.invalid){
  //       alert("please cheak form")
  //     }
  //     else{
  //       if (this.attendece_form.value.in_time == "" || this.attendece_form.value.in_time == ""){
  //         this.error = true
  //     }else{
  //       let punchArry:any = []
  //         for (let i = 0; i<this.attendece_form.value.in_time.length; i++){
  //           // console.log( "loop  "+ this.myform.value.in_time[i]);
  //           punchArry.push({attendance_type: this.attendece_form.value.log_type,attendance_datetime:this.intimecall(i)})
  //         }
  //         for (let i = 0; i<this.attendece_form.value.out_time.length; i++){
  //           // console.log( "loop  "+ this.myform.value.in_time[i]);
  //           punchArry.push({attendance_type: this.attendece_form.value.log_type,attendance_datetime:this.outtimecall(i)})
  //         }
  //       let postobj :any = {
  //         log_type : this.attendece_form.value.log_type,
  //         punch : punchArry,
  //         reason: this.attendece_form.value.reason,
  //         user_id: "620a423ef63cee0008ef41b6"
  //       }
  //       this.submitAlldata(postobj)
  //       this.attendece_form.reset()
  //     }
  //   }
  // }
  // intimecall(i : any){
  //   let new_s : string = this.attendece_form.value.in_time[i]
  //   console.log(new_s);
  //   let hr = new_s.split(":")
  //   console.log(hr);
  //   let year = this.attendece_form.value.date.split('-')
  //   let date = new Date().setHours(parseInt(hr[0]) , parseInt( hr[1]) , 0  ,0)
  //   date = new Date(date).setFullYear(parseInt(year[0]) ,parseInt(year[1]) -1 , parseInt( year[2]))
  //    return this.getDate(date)
  //     }
  //     outtimecall(i : any){
  //       let new_s : string = this.attendece_form.value.in_time[i]
  //   console.log(new_s);
  //   let hr = new_s.split(":")
  //   console.log(hr);
  //   let year = this.attendece_form.value.date.split('-')
  //   let date = new Date().setHours(parseInt(hr[0]) , parseInt( hr[1]) , 0  ,0)
  //   date = new Date(date).setFullYear(parseInt(year[0]) ,parseInt(year[1]) -1 , parseInt( year[2]))
  //    return this.getDate(date)
  //     }
  //   // add in time
  //   addIntime() {
  //     this.attendece_form
  //       .get('intime')
  //       .push(new FormControl(null, Validators.required));
  //   }
  //   // add outtime
  //   addOuttime() {
  //     this.attendece_form.get('outtime').push(new FormControl(null, Validators.required));
  //   }
  //   // delete in time
  //   deleteIntime(index: any): void {
  //     this.attendece_form.get('intime').controls.splice(index, 1);
  //   }
  //   // delete outtime
  //   deleteOuttime(index: any): void {
  //     this.attendece_form.get('outtime').controls.splice(index, 1);
  //   }

  //   // send data to api
  //   submitAlldata(myobj : any) {
  //     console.log(this.attendece_form.value);
  //     this.sendData.attendenceData(myobj).subscribe((res: any) => {
  //         console.log(res);
  //         this.success = true;
  //         this.error = false;
  //       });
  //     this.attendece_form.reset();
  //   }

  //   getDate(date : any){
  //     return  moment(new Date(date)).format("YYYY-MM-DDTHH:mm:ss.sssZ");
  //     }
  // }

  myform: any = new FormGroup({
    date: new FormControl('', Validators.required),
    in_time: new FormArray([]),
    out_time: new FormArray([]),
    log_type: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });
  Handlepost() {
    if (this.myform.invalid) {
      alert('please cheak form');
    } else {
      if (this.myform.value.in_time == '' || this.myform.value.in_time == '') {
        this.error = true;
      } else {
        let puncharr: any = [];
        for (let i = 0; i < this.myform.value.in_time.length; i++) {
          puncharr.push({
            attendance_type: this.myform.value.log_type,
            attendance_datetime: this.intimecall(i),
          });
        }
        for (let i = 0; i < this.myform.value.out_time.length; i++) {
          puncharr.push({
            attendance_type: this.myform.value.log_type,
            attendance_datetime: this.outtimecall(i),
          });
        }
        console.log('date', this.myform.value.date + this.myform.value.in_time);
        let postobj: any = {
          log_type: this.myform.value.log_type,
          punch: puncharr,
          reason: this.myform.value.reason,
          user_id: '620a423ef63cee0008ef41b6',
        };

        this.postapidata(postobj);
        // this.myform.reset()
      }
    }
  }
  intimecall(i: any) {
    let new_s: string = this.myform.value.in_time[i];

    let hr = new_s.split(':');

    let year = this.myform?.value.date.split('-');
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0);
    date = new Date(date).setFullYear(
      parseInt(year[0]),
      parseInt(year[1]) - 1,
      parseInt(year[2])
    );
    return this.getDate(date);
  }
  outtimecall(i: any) {
    let new_s: string = this.myform?.value.out_time[i];
    let hr = new_s.split(':');
    let year = this.myform.value.date.split('-');
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0);
    date = new Date(date).setFullYear(
      parseInt(year[0]),
      parseInt(year[1]) - 1,
      parseInt(year[2])
    );
    return this.getDate(date);
  }
  //   add in time
  addintime() {
    this.myform.get('in_time').push(new FormControl('', Validators.required));
  }
  //   add out time
  addouttime() {
    this.myform.get('out_time').push(new FormControl('', Validators.required));
  }
  //   delet in time efield
  deletintime(i: any) {
    this.myform.get('in_time').controls.splice(i, 1);
  }
  //  delet out time efield
  deletouttime(i: any) {
    this.myform.get('out_time').controls.splice(i, 1);
  }
  // function for api oe send data to api
  postapidata(myobj: any) {
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
