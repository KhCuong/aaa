'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Task, TaskStatus } from '../types/task';

interface TaskContextType {
  tasks: Task[];
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  addTaskResult: (taskId: string, files: string[], note: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      taskId: 'WR0001',
      taskName: "Search for Robert's house",
      caseName: "Murder case at Marry's house",
      deadline: "17:00 3/21/2025",
      status: "Waiting Executing",
      content: "Financial Investigation ABC bank , account TKS001090190",
    },
    {
      id: '2',
      taskId: 'WR0002',
      taskName: "Asset verification",
      caseName: "Fraud investigation",
      deadline: "14:00 4/15/2025",
      status: "Waiting Executing",
      content: "Verify assets for John Doe",
    }
  ]);

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const addTaskResult = (taskId: string, files: string[], note: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { 
        ...task, 
        status: 'Completed',
        result: { files, note }
      } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus, addTaskResult }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}