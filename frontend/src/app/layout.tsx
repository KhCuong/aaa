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
          <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}