import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}
 
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  setSession(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
