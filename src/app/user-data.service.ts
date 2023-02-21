import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  // api url
  url = 'http://192.168.1.135:5002/api/job';
  // attendence api
  att_api = "http://192.168.1.135:5002/api/attendance-request"
// assign Header
  Header : any = {
    headers: {
      Authorization:
        'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w',
    },
  }
  constructor(private http: HttpClient) {}
  // to get data from API
  users(page: number) {
    return this.http.get(this.url + '?page=' + page, this.Header)
  }
// insert data on API

  insertFormData(data: any) {
    data['company_id'] = '5d36920f9f0f6f0545a66adc';

    return this.http.post(this.url, data, this.Header)
  }
// Delete Data from API
  deleteFormData(data: any) {
    return this.http.delete(this.url  + "/" + data , this.Header
    )
  }
  // edit Form Data
  editFormData(job_id : any , job_name  :any){
    return this.http.put(this.url  + "/"  + job_id , job_name , this.Header
    )
  }

  // attendence Form 

  attendenceData(data : any ){
    // data['user_id'] = '620a423ef63cee0008ef41b6'
    return (<any>this.http).post(this.att_api , data ,this.Header)
  }
}
