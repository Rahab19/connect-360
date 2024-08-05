import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ContributePolls } from '../modules/contribute-polls';
import { PostPolls } from '../modules/post-polls';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  
    
  private apiUrl = 'https://4000/polls'

  constructor(private http:HttpClient) { }

  createPollResponse(id: string, response: any) {
    return this.http.post(`${this.apiUrl}/polls/${id}/response`, response);
  }

  getPollResponses(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}/responses`);
  }

  getPollResults(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}/results`);
  }

  getPolls() {
    return this.http.get(`${this.apiUrl}/polls`);
  }

  getPoll(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}`);
  }
}
