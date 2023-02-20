import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  job_id: any = '';
  selected_name: any = ' ';
  jobidforedit: any = '';
  jobnameforedit: any = '';
  success: any = '';
  err: any = '';
  errmessage: any = '';
  editable: any = '';

  constructor(
    private userData: UserDataService, private router: Router, private activeroute: ActivatedRoute
  ) {
    console.log(activeroute.snapshot.queryParams);
    this.jobidforedit = this.activeroute.snapshot.queryParams['job_id'];
    this.jobnameforedit = this.activeroute.snapshot.queryParams['job_name'];
    if (this.activeroute.snapshot.queryParams['job_id']) {
      this.editable = true
    }
   
  }

  myform1: any = new FormGroup({
    job_name: new FormControl('', Validators.required),
  });

  get validate(){
    return this.myform1.get('job_name')
  }

  editjobname(d: any) {
    // this.router.navigate(['postAPIForm'])
    let mydata = d.target.value;
  }
  postediteddata(e: any) {
    // console.log(this.myform1.value);
    let name: any = document.getElementById('demo');
    let job_name: any = name.value;
    let id: any = e.target.value;
  console.log(id);
  
    this.userData.editFormData(id, { job_name: job_name }).subscribe((r: any) => {
        // this.fetchUserData()

        if (this.jobidforedit) {
          if (r.success) {
            this.router.navigate(['home']);
            this.jobidforedit = '';
            this.jobnameforedit = '';
            this.success = true;
          }
          // else if (!r.headers.ok){
          //   this.err = true
          // }
          else {
            this.success = false;
            this.err = true;
          }
        } else {
          this.errmessage = 'please select any job for edit ';
        }
        console.log(r);
        this.myform1.reset();
      });
  }
}
