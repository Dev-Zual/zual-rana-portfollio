import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes></Routes>
      <Home></Home>
    </div>
  );
}

export default App;
