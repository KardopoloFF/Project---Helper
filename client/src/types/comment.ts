export interface IComment {
  id?: number;
  text: string;
  author: number;
  worker: number | null;
  rating: number;
  createdAt?: Date;
}