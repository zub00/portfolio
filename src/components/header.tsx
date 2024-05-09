import React from 'react';


const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-white mb-8">I'm a Software Developer passionate about crafting amazing web applications.</p>
      </div>
    </div>
  );
};

export default Header;
