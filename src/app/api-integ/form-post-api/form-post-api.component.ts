import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-form-post-api',
  templateUrl: './form-post-api.component.html',
  styleUrls: ['./form-post-api.component.css'],
})
export class FormPostApiComponent {
success : any = ""
 error : any = ""
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
     if(res.success){
     this.success = true
     }
     else{
      // alert(res.error[0].job_name)
      this.success = false;
      this.error =res.error[0].job_name
     }
    });
    this.jobFrom.reset()
  }
}
