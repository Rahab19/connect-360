export interface PostPolls {
    filter(arg0: (poll: { status: string; }) => boolean): PostPolls[];
    id: string;
    title: string;
    description: string;
    question:string;
    yesCount: number;
    noCount: number;
    option:string,
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    isActive: true
    
}

  
  