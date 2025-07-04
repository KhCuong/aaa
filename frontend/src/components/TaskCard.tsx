import { Task } from '../types/task';
import Link from 'next/link';

export default function TaskCard({ task }: { task: Task }) {
  const statusColors = {
    'Waiting Executing': 'bg-yellow-100 text-yellow-800',
    'Executing': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-5 gap-4 items-center">
        <div className="col-span-1 font-semibold">{task.taskId}</div>
        <div className="col-span-1">{task.taskName}</div>
        <div className="col-span-1">{task.caseName}</div>
        <div className="col-span-1">{task.deadline}</div>
        <div className="col-span-1 flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[task.status]}`}>
            {task.status}
          </span>
          {task.status === 'Waiting Executing' && (
            <Link 
              href={`/task/${task.id}`}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
            >
              Start Execution
            </Link>
          )}
          {task.status === 'Executing' && (
            <Link 
              href={`/task/${task.id}`}
              className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
            >
              Continue
            </Link>
          )}
          {task.status === 'Completed' && (
            <span className="text-green-600 text-sm">✓ Done</span>
          )}
        </div>
      </div>
    </div>
  );
}