import React from 'react';


const Projects: React.FC = () => {
  return (
    <div className="p-8 bg-custom-light-gradient dark:bg-custom-dark-gradient min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace the following divs with actual project components */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-700">Description of Project 1</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-700">Description of Project 2</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-700">Description of Project 3</p>
          </div>
          {/* Add more project components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

    
