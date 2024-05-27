import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: boolean = false;

  constructor(private http: HttpClient) { }

  login(data: { username: string, password: string }) {
    this.http.put('http://10.31.37.170:3306/login', data).subscribe((res) => {
      console.log(res);
    });
    if (data.username === 'admin' && data.password === 'admin') {
      this.auth = true;
    } else { this.auth = false; }
    return of(this.auth);
  }

  logout() {
    this.auth = false;
  }

  register(data: object) {
    this.http.post('http://10.31.37.170:3306/register', data).subscribe((res) => {
      console.log(res);
    });
    return of("we tkt")
  }

  get isAuth(): boolean {
    return this.auth;
  }
}
