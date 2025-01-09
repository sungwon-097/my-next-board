export type Article = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  preview: string;
  user: User[];
};

export type Comment = {
  id: number;
  content: string;
  userId: number;
  user: User;
  postId: number;
  createdAt: Date;
};

export type User = {
  id: number;
  name: string;
  email: string;
};
