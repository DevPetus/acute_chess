import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: boolean = true;

  constructor(private http: HttpClient) {

  }

  login(loginData: { username: string, password: string }) {
    this.http.put('http://10.31.37.170:8000/login', loginData).subscribe((res) => {
      console.log(res);
    });
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      this.auth = true;
    } else { this.auth = false; }
    return of(this.auth);
  }

  logout() {
    this.auth = false;
  }

  register(registerData: object) {
    this.http.post('http://10.31.37.170:8000/register', registerData).subscribe((res) => {
      console.log(res);
    });
    return of("we tkt")
  }

  get isAuth(): boolean {
    return this.auth;
  }
}
