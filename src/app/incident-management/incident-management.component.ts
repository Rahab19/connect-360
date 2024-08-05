import { Component, OnInit } from '@angular/core';
import { IncidentsManagementService } from '../services/incidents-management.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../services/ai.service';
import { OfficialComponent } from "../official/official.component";

interface Incident {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: 'pending' | 'in-progress' | 'resolved';
  category: string;
}

@Component({
  selector: 'app-incident-management',
  standalone: true,
  imports: [CommonModule, FormsModule, OfficialComponent],
  templateUrl: './incident-management.component.html',
  styleUrl: './incident-management.component.css'
})
export class IncidentManagementComponent implements OnInit {

  incidentList: Incident[] = [];
  filteredincidentList: Incident[] = [];
  
  selectedCategory: string = 'All';
  aiService: any;

  constructor(private incidentsmanagementService: IncidentsManagementService, privateaiservice:AiService) {}

  ngOnInit() {
    this.loadIncident();
  }

  loadIncident() {
    
  }

  filterIncident() {
    this.filteredincidentList = this.selectedCategory === 'All' 
      ? this.incidentList 
      : this.incidentList.filter(f => f.category === this.selectedCategory);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterIncident();
  }

  deleteIncident(id: number) {
   
  }

  markAsResolved(id: number) {
    
  }

  summarizeIncident(id: number) {
    this.aiService.summarizeIncident(id).subscribe({
      next: (summary: any) => {
        console.log('Incident Summary:', summary);
        alert('Incident summarized! Check the console for details.');
      },
      error: (error: any) => {
        console.error('Error summarizing Incident:', error);
        alert('Error summarizing Incident. Please try again.');
      }
      // You can display this summary in a modal or update the Incident item
    });
  }

  respondToIncident(id: number) {
    // Implement response functionality (e.g., open a modal for response)
    console.log('Respond to Incident:', id);
  }

}
