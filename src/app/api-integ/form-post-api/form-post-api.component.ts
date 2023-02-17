import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-form-post-api',
  templateUrl: './form-post-api.component.html',
  styleUrls: ['./form-post-api.component.css'],
})
export class FormPostApiComponent {
success : any = true

  constructor(private postdata: UserDataService) {}

  jobFrom: any = new FormGroup({
    job_name: new FormControl('', [Validators.required]),
    
  });
  // get job name from input field
  get jobname() {
    return this.jobFrom.get('job_name');
  }
// send jobname to api 
  jobformData() {
    console.log(this.jobFrom.value);
    this.postdata.insertFormData(this.jobFrom.value).subscribe((res : any) => {
      console.log(res);
     if(res.success === true){
      alert("Success")
     }
     else{
      alert(res.error[0].job_name)
     }
    });
  }
}
