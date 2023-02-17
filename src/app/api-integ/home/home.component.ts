import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  // API calling
  users : any = ""
  pagination: number = 1;
  
  constructor(private userData :UserDataService) {
    this.fetchUserData()
  }
  
  fetchUserData(){ 
         this.userData.users(this.pagination).subscribe((data : any) =>{   
          console.log("data" , data)
           this.users = data;
           
         })
        }
  prev(){
    this.pagination -= this.users.data.pagination.has_previous
    this.fetchUserData()
  }

  next(){
    this.pagination += this.users.data.pagination.has_next
    this.fetchUserData()
  }

  async deleteJob(e: any){
    console.log(e.target.value);
    
   await this.userData.deleteFormData(e.target.value).subscribe((res :any )=>{
    
      console.log(res);
      if(res.success){
        this.fetchUserData()
      }

      
    })
    console.log("data dekete");
    
  }
  // built in directive ngStyle and ngClass
  myStyles= {
    width :"100px",
    height:"100px",
    color:"red",
    background : "skyblue",
  }

  addStyle(){
    this.myStyles.color  = 'white';
    this.myStyles.background = 'black'
    
  }

  // ngClass

  myClasses = {
    box : true,
    border : false,
    circle : false
  }
  changeShape(){
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.circle = !this.myClasses.circle;
  }

  selectedSkill = '';

  handleEvents(e : any){
      const value = e.target.value;
      this.selectedSkill = value;
  }

   data = '';
  isDataArrived = false;

  // constructor(){
  //   this.getData()
  // }

  getData(){
    setTimeout(() => {
      this.data = "data from server";
      this.isDataArrived = true;
    }, 4000);
  }
  // ngFor

  names : string[] = ["darshak" , "Anshul" , "Parthiv" , "Keval"]


}
