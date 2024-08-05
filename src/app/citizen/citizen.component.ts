import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncidentService } from '../services/incident.service';
import { FeedbackService } from '../services/feedback.service';
import { PollService } from '../services/poll.service';
import { EducateService } from '../services/educate.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-citizen',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './citizen.component.html',
  styleUrl: './citizen.component.css'
})
export class CitizenComponent {

  // constructor(private router:Router){ }
  // educate:Educate[] = []
  // feedback:Feedback[] = []
  // activePolls: Poll[] = []
  // recentIncidents: Incident[] = []
  

  // ngOnInit(): void {
  //   this.Loadeducate()
  //   this.Loadfeedback()
  //   this.LoadactivePolls()
  //   this.LoadrecentIncidents()
  //  }

  //  Loadeducate () {
  //   this.EducateService.getEducate().subscribe(
  //     educate => this.Educate = educate,
  //     console.error('cant find the document')
  //   )
  //  }
 
  // Loadfeedback() {
  //   this.FeedbackService.getFeedback().subscribe(
  //     Feedback => this.feedback = Feedback,
  //     console.error('cant send feedback')
  //     )
  // }

  // LoadactivePolls() {
  //   this.activePolls.getPolls().subscribe(
  //     Polls => this.activePolls = Polls, 

  //   )
  // }

  // LoadrecentIncidents() {
  //   this.incidentService.getRecentIncidents().subscribe(
  //     incidents => this.recentIncidents = incidents,
  //     console.error('Error fetching recent incidents', error)
  //   );
  // }

   
 

}
