import Header from './components/app/Header'
import Footer from './components/app/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

import { SpeedInsights } from '@vercel/speed-insights/react';

import owner from "./global/owner"


// let theme_color_1 = {
//   backgroundColor: "#282c34",
//   textColor: 'rgb(255, 255, 255)',
//   sekundColor: '#00a0cd',
//   sekundColorShadow: 'rgba(97, 218, 251, 0.1) 0px 0px 20px 2px'
// }


function App() {
  return (
    <div className="font-sans">
      <SpeedInsights />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer owner={owner.fullName}/>
      </Router>
    </div>
  );
}


export default App;

