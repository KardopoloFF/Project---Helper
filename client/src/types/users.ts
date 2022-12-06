import { IComment } from "./comment";
import { ITask } from "./task";

export interface IUser {
  id: number;
  name: string;
  mail: string;
  password: string;
  phone: string;
  img: string;
  isModer: boolean;
  workerTasks?: Array<ITask>;
  comments?: Array<IComment>;
}