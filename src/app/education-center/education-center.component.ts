import { Component, OnInit } from '@angular/core';
import { EducateService } from '../services/educate.service';
import { AiService } from '../services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CitizenComponent } from "../citizen/citizen.component";


interface Document {
  id: number;
  name: string;
  url: string;
}


@Component({
  selector: 'app-education-center',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CitizenComponent],
  templateUrl: './education-center.component.html',
  styleUrl: './education-center.component.css'
})
export class EducationCenterComponent implements OnInit {
  documents: Document[] = [];
 
  constructor(
    private educateService: EducateService,
    private aiService: AiService
  ) { }



  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.educateService.getDocuments().subscribe({
      next: (docs: Document[]) => {
        this.documents = docs;
      },
      error: (error: any) => {
        console.error('Error loading documents:', error);
      }
    });
  }

  openDocument(url: string): void {
    window.open(url, '_blank');
  }
  summarizeDocument(document: Document, event: Event): void {
    event.stopPropagation(); // Prevent opening the document when clicking the summarize button
    this.aiService.summarizeDocument(document.url).subscribe({
      next: (summary: any) => {
        console.log('Document Summary:', summary);
        alert('Document summarized! Check the console for details.');
      },
      error: (error: any) => {
        console.error('Error summarizing document:', error);
        alert('Error summarizing document. Please try again.');
      }
    });
  }

}
