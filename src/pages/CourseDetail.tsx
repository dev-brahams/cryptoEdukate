import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Target, GraduationCap } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Course not found</h1>
            <Link to="/courses" className="mt-4 text-indigo-600 hover:text-indigo-500 inline-flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="text-indigo-600 hover:text-indigo-500 inline-flex items-center mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to courses
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Course Header */}
          <div className="bg-indigo-600 px-6 py-8 sm:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                <p className="text-indigo-100">{course.description}</p>
              </div>
              <course.icon className="h-16 w-16 text-white opacity-75" />
            </div>
          </div>

          {/* Course Info */}
          <div className="px-6 py-8 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-600">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-600">{course.level}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-gray-600">{course.modules.length} Modules</span>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-indigo-500 mr-2" />
                Learning Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Instructor</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900">{course.instructor.name}</h3>
                <p className="text-indigo-600 text-sm mb-2">{course.instructor.title}</p>
                <p className="text-gray-600">{course.instructor.bio}</p>
              </div>
            </div>

            {/* Course Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-500">{module.duration}</p>
                      </div>
                    </div>
                    <div className="px-4 py-3">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;