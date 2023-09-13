import { useState } from 'react';
import { motion } from 'framer-motion';
import UltraHead1 from '../img/ultra-head-square.png';
import UltraHead2 from '../img/ultra-head-square-alt.png';
import UltraHead3 from '../img/ultra-head-square-alt-2.png';
import UltraHead4 from '../img/ultra-head-square-alt-3.png';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import TarjetaFront from './TarjetaFront';
import '../App.css';
import Home from './Home';
import Pitch from './Pitch';


const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [UltraHead1, UltraHead2, UltraHead3, UltraHead4];

  const toggleTransition = () => {
    // Selecciona una imagen aleatoria diferente de la actual
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentImageIndex);

    setCurrentImageIndex(newIndex);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
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
          src={images[currentImageIndex]}
          alt="Ultraspaces is where you can have some fun and take a break"
          className={`ultra-head transitioned`}
          onClick={toggleTransition}
          initial="initial"
          animate="animate"
          variants={transitionVariants}
          transition={{ duration: 2 }}
        />
        <p className="fun-line">Where you can have fun and take cool breaks</p>
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