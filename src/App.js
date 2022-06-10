import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About';
import Blog from './pages/Home/Blog';
import Contact from './pages/Home/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Home/Projects';
import Services from './pages/Home/Services';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/shared/Footer';
import NotFound from './pages/shared/NotFound';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
