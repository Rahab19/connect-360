import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'Home', component: HomeComponent },
        // Add other routes as needed
        { path: '', redirectTo: '/Home', pathMatch: 'full' },
    
];
    

