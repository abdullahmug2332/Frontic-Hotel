import About from './About';
import Home from './Home';
import './App.css';
import Booking from './Booking';
import Services from './Services';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/booking' element={<Booking/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
