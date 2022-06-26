export interface Question {
  id: number;
  title: string;
  description: string;
  note: string;
  content: string[];
  statues: boolean;
  files: File[];
  comments: Comment[];
}

export interface File {
  id: number;
  name: string;
  type: string;
  size: number;
  url: string;
  status: boolean;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  files: File[];
  statues: boolean;
}
