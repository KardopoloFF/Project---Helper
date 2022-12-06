export interface ITask {
  id?: number;
  status: string;
  title: string;
  text: string;
  date: Date | null;
  price: number;
  author: number;
  worker: number | null;
  categoryId: number;
  geo?: string;
}