import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const TarjetaFront = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/spaces');
  };

  return (
    <div className="tarjeta-container">
      <motion.div
        className="tarjeta-front"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <button onClick={handleButtonClick}>Spaces</button>
      </motion.div>
    </div>
  );
};

export default TarjetaFront;