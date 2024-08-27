import { TaskType } from "../../screens/Home/types";

export type TaskCardProps = {
  task: TaskType;
  onDelete: (id: string | number[]) => void;
  handleToggleTask: (id: string | number[]) => void;
};
