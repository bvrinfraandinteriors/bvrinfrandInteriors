import Header from '../../my-construction-site-vite/src/components/Header';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import ConsultationForm from './components/ConsultationForm';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/consultation' element={<ConsultationForm />}/>
            {/* Add more routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
