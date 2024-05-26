import React from 'react';

interface HeaderProps {
  scrollToContactMe: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContactMe }) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center text-center pt-16">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Jme%2C_UK_MC_.jpg" // Replace with your profile photo URL
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-white mb-8 max-w-md mx-auto drop-shadow-lg">
        I'm a Software Developer passionate about crafting amazing web applications.
      </p>
      <button
        onClick={scrollToContactMe}
        className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
      >
        Contact Me
      </button>
    </div>
  );
};

export default Header;
