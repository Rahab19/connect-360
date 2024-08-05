export interface Incident {
status: string;
reportedBy: string;
    IncidentID: string;
    UserID: string;
    Title: string;
    Description: string;
    MediaUrl: string;
    CreatedAt: Date;
  }
  
  export interface IncidentCreateModel {
    UserID: string;
    Title: string;
    Description: string;
    MediaUrl: string;
  }
  
  export interface IncidentUpdateModel {
    Title: string;
    Description: string;
    MediaUrl: string;
  }
