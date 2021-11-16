import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
