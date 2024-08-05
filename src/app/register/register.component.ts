import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { 
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { 'mismatch': true };
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      
      if (email.endsWith('@gok.com')) {
        this.registerOfficial(name, email, password);
      } else {
        this.registerCitizen(name, email, password);
      }
    } else {
      this.markFormGroupTouched(this.registerForm);
    }
  }

  private registerCitizen(name: string, email: string, password: string) {
    this.authService.registerCitizen(name, email, password).subscribe({
      next: (response) => {
        console.log('Citizen registration successful', response);
        this.router.navigate(['/citizen']);
      },
      error: (error) => {
        console.error('Citizen registration error:', error);
        this.errorMessage = error.error?.message || 'An error occurred during registration';
      },
      complete: () => {}
    });
  }

  private registerOfficial(name: string, email: string, password: string) {
    this.authService.registerOfficial(name, email, password).subscribe({
      next: (response) => {
        console.log('Official registration successful', response);
        this.router.navigate(['/official']);
      },
      error: (error) => {
        console.error('Official registration error:', error);
        this.errorMessage = error.error?.message || 'An error occurred during registration';
      },
      complete: () => {}
    });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
 
}
