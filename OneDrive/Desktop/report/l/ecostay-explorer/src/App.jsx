import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import About from './About';
import Dashboard from './Dashboard';
import Showcase from './pages/showcase';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="card-grid">
                <Card title="Mountain Eco-Lodge" />
                <Card title="Beachside Sustainable Hut" />
                <Card title="Forest Treehouse" />
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;