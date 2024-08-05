import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ContributePollsComponent } from "./contribute-polls/contribute-polls.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EducationCenterComponent } from "./education-center/education-center.component";
import { IncidentComponent } from "./incident-report/incident-report.component";
import { FeedbackManagementComponent } from "./feedback-management/feedback-management.component";
import { AdminComponent } from "./admin/admin.component";
import { PollsManagementComponent } from "./polls-management/polls-management.component";
import { IncidentManagementComponent } from "./incident-management/incident-management.component";
import { CitizenComponent } from "./citizen/citizen.component";
import { OfficialComponent } from "./official/official.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, LoginComponent, RegisterComponent, ContributePollsComponent, EducationCenterComponent, IncidentComponent, FeedbackManagementComponent, AdminComponent, PollsManagementComponent, IncidentManagementComponent, CitizenComponent, OfficialComponent]
})
export class AppComponent {
  title = 'connect_360';

}
