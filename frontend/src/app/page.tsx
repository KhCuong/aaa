import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Financial Investigation System</h1>
      </header>
      <TaskList />
    </div>
  );
}