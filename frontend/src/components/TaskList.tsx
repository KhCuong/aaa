'use client'; // Add this at the top
import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Task List</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
              <span className="ml-2 font-medium">Mr Jone Kevin</span>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              Logout
            </button>
          </div>
        </div>
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