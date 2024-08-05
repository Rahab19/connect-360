export interface ContributePolls {
    id: string;
    pollId: string;
    userId: string;
    response: 'yes' | 'no';
    createdAt: Date;  
}
