import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import AboutDepartment from './pages/about/aboutDepartment/AboutDepartment';
import Faq from './pages/faqSite/Faq';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about-department" element={<AboutDepartment />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
