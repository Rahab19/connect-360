import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }
  summarizeDocument(url: string): Observable<string> {
    
    // make an HTTP request to your AI service here.
    return of(`This is a summary of the document at ${url}. The document discusses important civic matters and provides valuable information for citizens.`).pipe(delay(1000));
  }

  summarizeFeedback(id:number){

    return of (`This a summary of the feedback at ${id}. The citizen is mainly concerned the insecurity issues that have been happenning in the neighbourhood.`).pipe(delay(1000));
  }

  summarizeIncident(id:number){

    return of (`This a summary of the incident at ${id}. The citizen is mainly concerned the insecurity issues that have been happenning in the neighbourhood.`).pipe(delay(1000));
  }
}
