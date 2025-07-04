'use client';

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
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Detail Financial Investigation task</h1>

      <TaskDetail task={task} />
    </div>
  );
}