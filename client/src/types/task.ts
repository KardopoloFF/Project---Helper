export interface ITask {
  id: number;
  status: string;
  title: string;
  text: string;
  date: Date;
  price: number;
  author: number;
  worker: number;
  cat_task_id: number;
  geo: string;
}