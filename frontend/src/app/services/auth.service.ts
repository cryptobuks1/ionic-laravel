import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string) {
    const data={name: name, email: email, password: password};
    this.http.post('http://127.0.0.1:8000/api/auth/register', data)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });

  }
}
