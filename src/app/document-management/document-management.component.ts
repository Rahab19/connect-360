import { Component } from '@angular/core';
import { OfficialComponent } from "../official/official.component";

@Component({
  selector: 'app-document-management',
  standalone: true,
  imports: [OfficialComponent],
  templateUrl: './document-management.component.html',
  styleUrl: './document-management.component.css'
})
export class DocumentManagementComponent {

}
