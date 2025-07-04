'use client';

import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Task List</h1>
      </div>

      <div className="grid grid-cols-5 bg-gray-100 p-3 rounded-t-lg font-semibold text-gray-700">
        <div>Task ID</div>
        <div>Task Name</div>
        <div>Name of Case</div>
        <div>Deadline</div>
        <div>Status</div>
      </div>

      <div className="mt-2">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
