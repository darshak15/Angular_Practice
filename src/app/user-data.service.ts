import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  // url = "https://jsonplaceholder.typicode.com/todos"
  url = 'http://192.168.1.135:5002/api/job';

  constructor(private http: HttpClient) {}
  users(page: number) {
    return this.http.get(this.url + '?page=' + page, {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w',
      },
    });
  }

  insertFormData(data: any) {
    data['company_id'] = '5d36920f9f0f6f0545a66adc';

    return this.http.post('http://192.168.1.135:5002/api/job', data, {
      headers: {
        Authorization:
          'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w',
      },
    });
  }

  deleteFormData(data: any) {
    return this.http.delete("http://192.168.1.135:5002/api/job/" + data ,
    {
      headers: {
        Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"
      }
  }
    )
  }
}
