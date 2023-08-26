import { useState } from 'react';
import { motion } from 'framer-motion';
import UltraHead1 from '../img/ultra-head-square.png';
import UltraHead2 from '../img/ultra-head-square-alt.png';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import TarjetaFront from './TarjetaFront';
import '../App.css';
import Home from './Home';
import Pitch from './Pitch';

const Header = () => {
  const [isTransitioned, setIsTransitioned] = useState(false);
  const navigate = useNavigate();

  const toggleTransition = () => {
    setIsTransitioned(!isTransitioned);
  };

  const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header>
      <h1>
        <Link to="/" onClick={handleLogoClick}>
          <span className="ultra">Ⓤ</span> ultraspaces{' '}
        </Link>
        <Link to="/Pitch">
          <span className="emoji">🚀</span>
        </Link>
      </h1>
      <TarjetaFront />
      <div>
        <motion.img
          src={isTransitioned ? UltraHead2 : UltraHead1}
          alt="Relax and see ultraspaces just for fun"
          className={`ultra-head ${isTransitioned ? 'transitioned' : ''}`}
          onClick={toggleTransition}
          initial="initial"
          animate="animate"
          variants={transitionVariants}
          transition={{ duration: isTransitioned ? 2 : 4 }}
        />
        <hr className="divisory-line" />
        <p className="fun-line">Ultraspaces is where you can have some fun and take a break</p>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pitch" element={<Pitch />} />
      </Routes>
      <Header />
      {/* Rest of your app components */}
    </div>
  );
};

export default App;
