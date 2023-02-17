import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-form-post-api',
  templateUrl: './form-post-api.component.html',
  styleUrls: ['./form-post-api.component.css'],
})
export class FormPostApiComponent {
  constructor(private postdata: UserDataService) {}

  jobFrom: any = new FormGroup({
    job_name: new FormControl(''),
  });

  get jobname() {
    return this.jobFrom.get('job_name');
  }
  jobformData() {
    console.log(this.jobFrom.value);
    this.postdata.getFormData(this.jobname.value).subscribe((res) => {
      console.log(res);
      
    });
  }
}
