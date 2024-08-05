import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      map((response: any) => response as { token: string }),
      tap(response => this.setToken(response.token))
    );
  }

  registerCitizen(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password });
  }

  registerOfficial(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password });
  }

  adminLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/adminLogin`, { email, password }).pipe(
      map((response: any) => response as { token: string }),
      tap(response => this.setToken(response.token))
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getDecodedToken(): any {
    const token = localStorage.getItem('token');
    return token? jwtDecode(token) : null; // Use the jwtDecode function
  }

  getUserRole(): string | null {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken.role : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
