import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../services/incident.service';
import { CitizenComponent } from "../citizen/citizen.component";
import { Incident, IncidentCreateModel } from '../modules/incidents';


@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CitizenComponent],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})

export class IncidentComponent implements OnInit {
  incidents: Incident[] = [];
  incidentForm!: FormGroup;
  selectedFiles: File[] = [];

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.getIncidents();
    this.createForm();
  }

  createForm(): void {
    this.incidentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      reportedBy: new FormControl('', Validators.required)
    });
  }

  getIncidents(): void {
    this.incidentService.getIncidents().subscribe((incidents: Incident[]) => {
      this.incidents = incidents;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submitIncident(): void {
    const createModel: IncidentCreateModel = {
      UserID: '',
      Title: '',
      Description: '',
      MediaUrl: ''
    };

    this.incidentService.addIncident(createModel).subscribe((response: { message: string; incidentID: string }) => {
      this.getIncidents();
      this.incidentForm.reset();
      this.selectedFiles = [];
    });
  }
}


