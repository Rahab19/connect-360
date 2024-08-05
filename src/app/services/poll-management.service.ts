import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPolls } from '../modules/post-polls';



@Injectable({
  providedIn: 'root'
})
export class PollManagementService {

  private apiUrl = 'https://4000/polls'; // update with your backend API URL

  constructor(private http: HttpClient) { }

  createPoll(poll:PostPolls) {
    return this.http.post(`${this.apiUrl}/polls`, poll);
  }

  getPolls() {
    return this.http.get(`${this.apiUrl}/polls`);
  }

  getPoll(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}`);
  }

  updatePoll(id: string, poll: any) {
    return this.http.put(`${this.apiUrl}/polls/${id}`, poll);
  }

  deletePoll(id: string, Poll: any) {
    return this.http.delete(`${this.apiUrl}/polls/${id}`);
  }

  closePoll(id: string) {
    return this.http.post(`${this.apiUrl}/polls/${id}/close`, {});
  }


  getPollResponses(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}/responses`);
  }

  getPollResults(id: string) {
    return this.http.get(`${this.apiUrl}/polls/${id}/results`);
  }
}
