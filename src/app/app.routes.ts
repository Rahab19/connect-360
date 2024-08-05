import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContributePollsComponent } from './contribute-polls/contribute-polls.component';
import { EducationCenterComponent } from './education-center/education-center.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management.component';
import { IncidentManagementComponent } from './incident-management/incident-management.component';
import { PollsManagementComponent } from './polls-management/polls-management.component';
import { CitizenComponent } from './citizen/citizen.component';
import { IncidentComponent } from './incident-report/incident-report.component';
import { OfficialComponent } from './official/official.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
        { path: 'register', component: RegisterComponent },
        { path: 'login',component:LoginComponent},
        { path: 'home', component: HomeComponent },
        { path: 'admin', component: AdminComponent },
        { path: 'official', component: OfficialComponent},
        { path: 'citizen', component: CitizenComponent,  canActivate: [authGuard, roleGuard],data: { expectedRole: 'citizen' } },
        { path: 'incident-report', component: IncidentComponent, canActivate: [authGuard] },
        { path: 'contribute-polls', component: ContributePollsComponent, canActivate: [authGuard] },
        { path: 'education-center',component:EducationCenterComponent, canActivate: [authGuard]},
        { path: 'header',component:HeaderComponent},
        { path: 'feedback-management', component: FeedbackManagementComponent, canActivate: [authGuard] },
        { path: 'incident-management', component: IncidentManagementComponent, canActivate: [authGuard] },
        { path: 'polls-management', component: PollsManagementComponent, canActivate: [authGuard] },
        
        //         path: 'users', 
        //         component:AdminComponent , 
        //         canActivate: [authGuard, roleGuard],
        //         data: { expectedRole: 'admin' }
        //       },
        //       { 
        //         path: 'users/:id', 
        //         component: AdminComponent, 
        //         canActivate: [authGuard]
        //       },
        //       { 
        //         path: 'feedback', 
        //         component: FeedbackManagementComponent, 
        //         canActivate: [authGuard]
        //       },
        //       { 
        //         path: 'polls', 
        //         component: PollsManagementComponent, 
        //         canActivate: [authGuard]
              
        //       { path: 'unauthorized', component: UnauthorizedComponent },
        
        // Add other routes as needed
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        {path:'**',redirectTo:'/login'}
    
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]
})

export class AppRoutingModule{ }

