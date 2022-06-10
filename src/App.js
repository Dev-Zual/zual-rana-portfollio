import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes></Routes>
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
