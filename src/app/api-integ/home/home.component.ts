import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // API calling
  users: any = '';
  pagination: number = 1;
  job_id: any = '';
  selected_name: any = ' ';
  jobidforedit: any = false;
  jobnameforedit: any = '';
  success: any = '';
  err: any = '';
  errmessage: any = '';
  editable: any = '';

  constructor(private userData: UserDataService, private router: Router) {
    this.fetchUserData();
  }
  myform1: any = new FormGroup({
    job_name: new FormControl('', Validators.required),
  });

  fetchUserData() {
    this.userData.users(this.pagination).subscribe((data: any) => {
      console.log('data', data);
      this.users = data;
    });
  }
  prev() {
    this.pagination -= this.users.data.pagination.has_previous;
    this.fetchUserData();
  }

  next() {
    this.pagination += this.users.data.pagination.has_next;
    this.fetchUserData();
  }

  deleteJob(e: any) {
    console.log(e.target.value);

    this.userData.deleteFormData(e.target.value).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.fetchUserData();
      } else {
        this.fetchUserData();
      }
    });
  }

  editjobname(d: any) {
    let mydata = d.target.value;
    this.users.data.list.filter((data: any) => {
      this.editable = true;
      if (mydata == data.job_id) {
        this.jobidforedit = data.job_id;
        this.jobnameforedit = data.job_name;
        this.router.navigate(['editForm'], {
          queryParams: {
            job_id: this.jobidforedit,
            job_name: this.jobnameforedit,
          },
        });
      }
    });
  }
  postediteddata() {
    console.log(this.myform1.value);

    this.userData.editFormData(this.job_id, this.myform1.value).subscribe((r: any) => {
        this.fetchUserData();

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
        this.myform1.reset();
      });
  }
}
