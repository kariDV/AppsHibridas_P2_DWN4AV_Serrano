import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </>
  );
}

export default App;
