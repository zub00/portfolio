import React, { useRef } from 'react';
import './index.css';
import Header from './components/header';
import Projects from './components/projects';
import Hobbies from './components/hobbies';
import Achievements from './components/achievments';
import ContactMe from './components/contactme';


const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
       <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Zubeyr Guled</h1>
          <div>
            <button onClick={() => scrollToSection(homeRef)} className="mx-2 text-gray-50 hover:text-gray-600">Home</button>
            <button onClick={() => scrollToSection(projectsRef)} className="mx-2 text-gray-50 hover:text-gray-600">Projects</button>
            <button onClick={() => scrollToSection(achievementsRef)} className="mx-2 text-gray-50 hover:text-gray-600">Achievements</button>
            <button onClick={() => scrollToSection(hobbiesRef)} className="mx-2 text-gray-50 hover:text-gray-600">Hobbies</button>
            <button onClick={() => scrollToSection(contactMeRef)} className="mx-2 text-gray-50 hover:text-gray-600">Contact Me</button>

          </div>
        </div>
      </nav>

      <div ref={homeRef} className="pt-16">
        <Header scrollToContactMe={() => scrollToSection(contactMeRef)} />
      </div>
  
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <div ref={hobbiesRef}>
        <Hobbies />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
    </div>
  );
};



    
export default App;
