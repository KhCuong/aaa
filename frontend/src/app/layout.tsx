import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TaskProvider } from '../context/TaskContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Financial Investigation System',
  description: 'Task management for financial investigations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <TaskProvider>
          <div className="min-h-screen flex">
            {/* New Sidebar matching the image */}
            <div className="w-64 bg-white border-r p-4">
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                  <div className="ml-3">
                    <p className="text-sm">ID: CA00001</p>
                    <p className="font-medium">Mr Jone Kevin</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <button className="text-gray-600 hover:text-gray-900 w-full text-left mb-4">
                  Logout
                </button>
              </div>

              <nav className="space-y-1">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Feature</h3>
                <a href="#" className="block py-2 px-3 rounded bg-blue-50 text-blue-700 font-medium">Task list</a>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Dashboard</a>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Reports</a>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Settings</a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="container mx-auto px-4 py-6">
                {children}
              </div>
            </div>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}