import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsManagementService {
  // private incident: Incident[] = [
  //   {
  //     id: 1,
  //     title: 'Pothole on Main Street',
  //     description: 'There\'s a large pothole on Main Street near the intersection with Oak Avenue. It\'s causing damage to vehicles.',
  //     date: new Date('2023-05-10'),
  //     status: 'pending',
  //     category: 'Infrastructure'
  //   },
  //   {
  //     id: 2,
  //     title: 'Noise Complaint - Construction Site',
  //     description: 'The construction site on Elm Street is operating outside of permitted hours, causing disturbance to residents.',
  //     date: new Date('2023-05-12'),
  //     status: 'in-progress',
  //     category: 'Public Services'
  //   },
  //   // Add more mock Incident items here
  // ];
  private apiUrl = 'https://4000/incidents'; 
}