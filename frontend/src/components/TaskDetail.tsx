'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TaskContext';
import { Task } from '../types/task';

export default function TaskDetail({ task }: { task: Task }) {
  const router = useRouter();
  const { addTaskResult, updateTaskStatus } = useTasks();
  const [note, setNote] = useState(task.result?.note || '');
  const [files, setFiles] = useState<string[]>(task.result?.files || []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => file.name);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles(prev => prev.filter(file => file !== fileName));
  };

  const handleComplete = () => {
    addTaskResult(task.id, files, note);
    router.push('/');
  };

  // Update status to "Executing" when component mounts if it was "Waiting Executing"
  useState(() => {
    if (task.status === 'Waiting Executing') {
      updateTaskStatus(task.id, 'Executing');
    }
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-gray-700">Task ID</h3>
              <p>{task.taskId}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Task Name</h3>
              <p>{task.taskName}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Name of case</h3>
              <p>{task.caseName}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Deadline</h3>
              <p>{task.deadline}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">Status</h3>
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {task.status}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700">Content</h3>
            <p className="bg-gray-50 p-3 rounded">{task.content}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Result</h3>
          
          <div className="mb-6">
            <h4 className="text-gray-700 mb-2">Upload file</h4>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
            >
              <p className="text-gray-500">Click or drag files to upload</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                multiple 
                onChange={handleFileUpload}
              />
            </div>
            
            {files.length > 0 && (
              <div className="mt-4">
                <h4 className="text-gray-700 mb-2">Uploaded files:</h4>
                <ul className="space-y-2">
                  {files.map(file => (
                    <li key={file} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="text-sm">{file}</span>
                      <button 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveFile(file)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <h4 className="text-gray-700 mb-2">Note</h4>
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type here......"
            />
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleComplete}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}