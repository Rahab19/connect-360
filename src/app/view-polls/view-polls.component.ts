import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-polls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-polls.component.html',
  styleUrl: './view-polls.component.css'
})
export class ViewPollsComponent {
activePolls: any;


}
