import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

interface Document {
  id: number;
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class EducateService {
  private documents: Document[] = [
    { id: 1, name: 'Annual Report 2023', url: 'assets/documents/annual_report_2023.pdf' },
    { id: 2, name: 'Budget Proposal', url: 'assets/documents/budget_proposal.pdf' },
    { id: 3, name: 'City Development Plan', url: 'assets/documents/city_development_plan.pdf' },
    { id: 4, name: 'Environmental Impact Study', url: 'assets/documents/environmental_impact_study.pdf' },
    { id: 5, name: 'Public Transportation Schedule', url: 'assets/documents/public_transportation_schedule.pdf' },
    { id: 6, name: 'Zoning Regulations', url: 'assets/documents/zoning_regulations.pdf' },
  ];

  getDocuments(): Observable<Document[]> {
    return of(this.documents).pipe(delay(300)); // Simulating network delay
  }
}
