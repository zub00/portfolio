import React from 'react';
import './index.css';
import Header from './components/header';
import Projects from './components/projects';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
    
  );
};

    
export default App;
