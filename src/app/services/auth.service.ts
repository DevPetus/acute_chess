import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: boolean = false;
  private token: JwtPayload | null = null;

  constructor(private http: HttpClient) {
    this.login(undefined)
  }

  login(loginData: { username: string, password: string } | undefined): Observable<Object> {
    this.token = this.getToken();
    
    this.auth = false;
    if (loginData?.username === 'admin' && loginData?.password === 'admin') {
      this.auth = true;
      return of({ username: 'admin', password: 'admin' });
    }

    if (this.token == null && loginData !== undefined) {
      // création d'un nouveau token
      this.http.post('http://localhost:8000/auth/', loginData).subscribe((res: any) => {
        localStorage.setItem('token', res.access_token);
        this.token = this.getToken();
      })
    }

    if (this.token !== null) {
      this.auth = true;
      return of(this.token);
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
      console.log(expiry, Date.now());
      if (expiry !== undefined && expiry > Date.now()) {
        localStorage.removeItem('token');
        return null
      }
      console.log("jwt ok", jwtDecode(token));
      return jwtDecode(token);
    }

    return null;
  }


  register(registerData: { password: string, passwordConfirm: string, username: string } | undefined) {
    this.http.put('http://localhost:8000/auth', registerData).subscribe((res) => {
      console.log(res);
    });
    return of("we tkt")
  }

  get isAuth(): boolean {
    return this.auth;
  }
}
