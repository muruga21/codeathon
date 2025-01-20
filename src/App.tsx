import React from 'react';
import './App.css'; 
import Contributors from './components/Contributors';
import OurTeam from './components/OurTeam';  

const App: React.FC = () => {
  return (
    <div className="App">
     
      
      <div className="section my-8 text-center">
        <h2 className="text-4xl mb-8 font-bold ">Contributors</h2>
        <Contributors /> 
      </div>


      <div className="section my-8 text-center">
        <h2 className="text-4xl mb-8 font-bold">Our Team</h2>
        <OurTeam /> 
      </div>
    </div>
  );
}

export default App;
