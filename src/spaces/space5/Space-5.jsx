import React, { useState, useEffect } from 'react';
import './custom.css';

const Space5 = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchNatureImages();
  }, []);

  const fetchNatureImages = async () => {
    try {
      // Realiza una solicitud a la API de Pixabay con tu clave API
      const response = await fetch('https://pixabay.com/api/?key=31310559-e87c83146d87f98b5baa7cbd0&q=nature&image_type=photo');
      const data = await response.json();
      
      // Asegúrate de que la respuesta contenga al menos una imagen
      if (data.hits && data.hits.length > 0) {
        setImageUrls(data.hits.map(hit => hit.largeImageURL));
      } else {
        console.error('No se encontraron imágenes de naturaleza en la respuesta.');
      }
    } catch (error) {
      console.error('Error fetching nature images:', error);
    }
  };

  const getNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className="Space5">
    <a href="/spaces/space5" className="url">
      Imanature
    </a>
      <h1>Imanature</h1>
      <h2>Pick from nature images one by one or run a 'pic play'</h2>
      <div className="image-container">
        <img src={imageUrls[currentImageIndex]} alt="Nature" />
      </div>
      <button onClick={getNextImage}>Have another natural image</button>
    </div>
  );
};

export default Space5;
