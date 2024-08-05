import { Component, OnInit } from '@angular/core';
// import { ContributePolls } from '../modules/contribute-polls';
import { PollService } from '../services/poll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CitizenComponent } from "../citizen/citizen.component";


@Component({
  selector: 'app-contribute-polls',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CitizenComponent],
  templateUrl: './contribute-polls.component.html',
  styleUrl: './contribute-polls.component.css'
})
export class ContributePollsComponent implements OnInit {
  activePolls: any[] = []
  // totalVotes!: number;

  constructor (private pollService: PollService) { }

  ngOnInit(): void {
    this.loadActivePolls();
  }

  loadActivePolls(): void {
    
  }

  submitVote(pollId: number, vote: 'yes' | 'no'): void {
    
  }

  calculatePercentage(votes: number, total: number): number {
    return total > 0 ? (votes / total) * 100 : 0;
  }
  // loadActivePolls(): void {
  //   this.pollService.getActivePolls().subscribe({
  //     next: (contributePolls) => this.activePolls = contributePolls,
  //     error: (error) => console.error('Error Loading Active polls', error)
  //   });
  // }

  // submitVote(contributepolls: ContributePolls, optionIndex: number): void {
  //   this.pollService.submitVote(contributepolls.id, optionIndex).subscribe({
  //     next: (updatedcontributePolls) => {
  //       const index = this.activePolls.findIndex(p => p.id === updatedcontributePolls.id);
  //       if (index !== -1) {
  //         this.activePolls[index] = updatedcontributePolls;
  //       }
  //     },
  //     error: (error) => console.error('Error submitting your vote', error)
  //   });
  // }

  // calculatePercentage(votes: number, totalVotes: number): number {
  //   return totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  // }


  

}


