import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedbackManagementService } from '../services/feedback-management.service';
import { AiService } from '../services/ai.service';
import { Feedback } from '../modules/feedback';
import { HttpClient } from '@angular/common/http';
import { OfficialComponent } from "../official/official.component";




@Component({
  selector: 'app-feedback-management',
  standalone: true,
  imports: [FormsModule, CommonModule, OfficialComponent],
  templateUrl: './feedback-management.component.html',
  styleUrl: './feedback-management.component.css'
})
export class FeedbackManagementComponent implements OnInit{
  feedbackList: Feedback[] = [];
  filteredFeedbackList: Feedback[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://4000/view/categories')
     .subscribe((categories: any) => this.categories = categories as string[]);
  
    this.http.get('https://4000/view/feedbacks')
     .subscribe((feedbacks: any) => {
        this.feedbackList = feedbacks as Feedback[];
        this.filteredFeedbackList = feedbacks as Feedback[];
      });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filteredFeedbackList = this.feedbackList.filter(fb => fb.category === category);
  }

  respondToFeedback(feedbackId: string): void {
    // Call backend API to respond to feedback
    this.http.post(`https://4000/view/${feedbackId}/respond`, {})
      .subscribe((response: any) => console.log(response));
  }

  deleteFeedback(feedbackId: string): void {
    // Call backend API to delete feedback
    this.http.delete(`https://4000/view/${feedbackId}`)
      .subscribe((response: any) => console.log(response));
  }
}


