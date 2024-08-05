import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AiService } from '../services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;

  
}
 

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  pendingOfficials: User[] = [];
  allUsers: User[] = [];

  constructor(private adminService: AdminService,  private router: Router) {}

  ngOnInit() {
    this.loadPendingOfficials();
    this.loadAllUsers();
  }

  loadPendingOfficials() {
    
  }

  loadAllUsers() {
    
  }

  approveOfficial(userId: number) {
    
  }

  rejectOfficial(userId: number) {
    
  }

  deleteUser(userId: number) {
    
}
}
