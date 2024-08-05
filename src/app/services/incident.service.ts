import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { Incident, IncidentCreateModel, IncidentUpdateModel } from '../modules/incidents';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = 'http://localhost:4000/incident';

  constructor(private http: HttpClient) { }

  private getUserIDFromToken(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.id; // Assuming the user ID is stored in the 'id' field
    }
    return '';
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiUrl);
  }

  getIncident(id: string): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiUrl}/${id}`);
  }

  addIncident(incident: IncidentCreateModel): Observable<{ message: string; incidentID: string }> {
    incident.UserID = this.getUserIDFromToken(); // Set UserID from the token
  
    return this.http.post<{ message: string; incidentID: string }>(this.apiUrl, incident);
  }

  updateIncident(id: string, incident: IncidentUpdateModel): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/${id}`, incident);
  }

  deleteIncident(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}