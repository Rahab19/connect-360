import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
register() {

}
loginForm!: FormGroup;
errorMessage: string = ''

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private router: Router
) {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

ngOnInit(): void {
  // Any initialization logic can go here
}

onLogin() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    
    if (email === 'admin@admin.com') {
      this.adminLogin(email, password);
    } else if (email.endsWith('@gok.com')) {
      this.officialLogin(email, password);
    } else {
      this.citizenLogin(email, password);
    }
  }
}

private adminLogin(email: string, password: string) {
  const observer: Observer<any> = {
    next: (response: any) => {
      console.log('Admin login successful', response);
      this.router.navigate(['/admin']); // Redirect to admin dashboard
    },
    error: (error: any) => {
      console.error('Admin login error:', error);
      this.errorMessage = error.error?.message || 'An error occurred during login';
    },
    complete: () => {}
  };

  this.authService.adminLogin(email, password).subscribe(observer);
}

private officialLogin(email: string, password: string) {
  const observer: Observer<any> = {
    next: (response: any) => {
      console.log('Official login successful', response);
      this.router.navigate(['/incident-management']); // Redirect to official dashboard
    },
    error: (error: any) => {
      console.error('Official login error:', error);
      this.errorMessage = error.error?.message || 'An error occurred during login';
    },
    complete: () => {}
  };

  this.authService.login(email, password).subscribe(observer);
}

private citizenLogin(email: string, password: string) {
  const observer: Observer<any> = {
    next: (response: any) => {
      console.log('Citizen login successful', response);
      this.router.navigate(['/incident-report']); // Redirect to citizen dashboard
    },
    error: (error: any) => {
      console.error('Citizen login error:', error);
      this.errorMessage = error.error?.message || 'An error occurred during login';
    },
    complete: () => {}
  };

  this.authService.login(email, password).subscribe(observer);
}



forgotPassword() {
  
}


}
