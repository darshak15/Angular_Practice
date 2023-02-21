import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-post-api',
  templateUrl: './form-post-api.component.html',
  styleUrls: ['./form-post-api.component.css'],
})
export class FormPostApiComponent {
  success: any = '';
  error: any = '';
  users: any = '';
  pagination: number = 1;
  job_id: any = '';
  selected_name: any = ' ';
  jobidforedit: any = false;
  jobnameforedit: any = '';
  err: any = '';
  errmessage: any = '';
  editable: any = '';

  constructor(
    private postdata: UserDataService,
    private router: Router,
    private userData: UserDataService,
  ) {}

  jobFrom: any = new FormGroup({
    job_name: new FormControl('', Validators.required),
  });
  // get job name from input field
  get jobname() {
    return this.jobFrom.get('job_name');
  }
  // send jobname to api
  jobformData() {
    console.log(this.jobFrom.value);
    this.postdata.insertFormData(this.jobFrom.value).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.success = true;
      } else {
        // alert(res.error[0].job_name)
        this.success = false;
        this.error = res.error[0].job_name;
      }
    });
    this.jobFrom.reset();
  }
  postediteddata() {
    this.userData.editFormData(this.job_id, this.jobFrom.value).subscribe((r: any) => {
        if (this.jobidforedit) {
          if (r.success) {
            this.jobidforedit = '';
            this.jobnameforedit = '';
            this.success = true;
          } else if (!r.headers.ok) {
            this.err = true;
          } else {
            this.success = false;
            this.err = true;
          }
        } else {
          this.errmessage = 'please select any job for edit ';
        }
        console.log(r);
        this.jobFrom.reset();
      });
  }
}
