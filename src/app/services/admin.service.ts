import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  // getPendingOfficials(): Observable {
  //   return this.http.get<>(`${this.apiUrl}/pendingOfficials`);
  // }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/users`);
  // }

  // approveOfficial(userId: string, token: string): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/approveOfficial/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${token}` }
  //   });
  // }

  // rejectOfficial(userId: string, token: string): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/rejectOfficial/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${token}` }
  //   });
  // }

  getpendingOfficials(){
    
  }
}
    
