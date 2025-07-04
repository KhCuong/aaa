import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Financial Investigation System</h1>
        {/* <p className="text-gray-600">Phase 3 - Detailed task execution</p> */}
      </header>
      <TaskList />
    </div>
  );
}