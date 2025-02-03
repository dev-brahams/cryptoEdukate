import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  level: string;
  duration: string;
  modules: { title: string; duration: string; topics: string[] }[];
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, icon: Icon, level, duration, modules }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Level: {level}</span>
            <span>{duration}</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <span>{modules.length} Modules</span>
          </div>
        </div>
        <Link
          to={`/courses/${id}`}
          className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-block text-center"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;