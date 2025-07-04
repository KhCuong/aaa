export type TaskStatus = 'Waiting Executing' | 'Executing' | 'Completed';

export interface Task {
  id: string;
  taskId: string;
  taskName: string;
  caseName: string;
  deadline: string;
  status: TaskStatus;
  content: string;
  result?: {
    files?: string[];
    note?: string;
  };
}