import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../modules/feedback';



@Injectable({
  providedIn: 'root'
})
export class FeedbackManagementService {

  private apiUrl = 'http://localhost:3000/feedbacks'; // replace with your backend API URL

  constructor(private http: HttpClient) { }

  getFeedbacks(): any {
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  getFeedback(id: string): any {
    return this.http.get<Feedback>(`${this.apiUrl}/${id}`);
  }

  addFeedback(feedback: Feedback): any {
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }

  updateFeedback(id: string, feedback: Feedback): any {
    return this.http.put<Feedback>(`${this.apiUrl}/${id}`, feedback);
  }

  deleteFeedback(id: string): any {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
