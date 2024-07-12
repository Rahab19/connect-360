import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
login() {
throw new Error('Method not implemented.');
}
onRegister() {
throw new Error('Method not implemented.');
}

registerForm!: FormGroup;


}
