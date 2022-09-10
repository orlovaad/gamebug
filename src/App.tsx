import React from 'react';
import './App.css';
import './index.css';
import Menu from './components/menu/Menu';
import Easy from './components/easy/Easy';


function App() {
  const handleSetLevel = (level: string) => {
    console.log(level);
  }
  return (
    <div>
      <div className="App" >
        <Menu setLevel={handleSetLevel}/>
      </div>
    </div>
  );
}

export default App;
