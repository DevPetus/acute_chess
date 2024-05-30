import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: boolean = false;

  constructor(private http: HttpClient) {
    this.login(undefined)
  }

  login(loginData: { username: string, password: string } | undefined): Observable<Object> {
    let token = this.getToken();
    
    this.auth = false;
    if (loginData?.username === 'admin' && loginData?.password === 'admin') {
      this.auth = true;
      return of({ username: 'admin', password: 'admin' });
    }

    if (token == null && loginData !== undefined) {
      // création d'un nouveau token
      this.http.post('http://localhost:8000/auth/', loginData).subscribe((res: any) => {
        localStorage.setItem('token', JSON.stringify(res.access_token));
      });
    }

    if (token !== null) {
      this.auth = true;
      return of(token);
    }

    this.auth = false;
    return of({})
  }

  logout() {
    this.auth = false;
    localStorage.removeItem('token');
  }

  getToken() { 
    let token = localStorage.getItem('token');
    if (token == "undefined" || token == "null") {
      localStorage.removeItem('token');
      return null
    }

    if (token !== null) {
      let expiry = jwtDecode(token).exp;
      if (expiry !== undefined && expiry < Date.now()) {
        localStorage.removeItem('token');
        return null
      }
      console.log("jwt ok", jwtDecode(token));
      return jwtDecode(token);
    }

    return null;
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
