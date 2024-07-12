import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})
export class IncidentReportComponent {
recentIncidents: any;

}
