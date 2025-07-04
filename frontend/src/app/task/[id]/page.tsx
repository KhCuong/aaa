'use client'; // Add this at the top

import { notFound } from 'next/navigation';
import { useTasks } from '../../../context/TaskContext';
import TaskDetail from '../../../components/TaskDetail';

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const { tasks } = useTasks();
  const task = tasks.find(t => t.id === params.id);

  if (!task) {
    notFound();
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Financial Investigation System</h1>
        <p className="text-gray-600">Phase 3 - Detailed task execution</p>
      </header>
      <TaskDetail task={task} />
    </div>
  );
}