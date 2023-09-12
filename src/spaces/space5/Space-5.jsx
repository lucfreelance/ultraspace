import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  text-align: center;
  width: 80vw; /* Cambiar a medida relativa */
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc; /* Agrega un borde */
`;

const Title = styled.h1`
  font-size: 2rem; /* Tamaño de fuente más grande */
  margin-bottom: 10px; /* Reducción del espacio inferior */
`;

const Subtitle = styled.h2`
  font-size: 1.5rem; /* Tamaño de fuente más grande */
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #82c596;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem; /* Tamaño de fuente más grande */
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: #5f9e74;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50vh; /* Cambiar a medida relativa */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Space5 = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowRunning, setIsSlideshowRunning] = useState(false);

  const slideshowIntervalRef = useRef(null);

  useEffect(() => {
    fetchNatureImages();
  }, []);

  useEffect(() => {
    if (isSlideshowRunning) {
      slideshowIntervalRef.current = setInterval(() => {
        getNextImage();
      }, 15000);
    } else {
      clearInterval(slideshowIntervalRef.current);
    }

    return () => {
      clearInterval(slideshowIntervalRef.current);
    };
  }, [isSlideshowRunning]);

  const fetchNatureImages = async () => {
    try {
      const response = await fetch('https://pixabay.com/api/?key=31310559-e87c83146d87f98b5baa7cbd0&q=nature&image_type=photo');
      const data = await response.json();

      if (data.hits && data.hits.length > 0) {
        setImageUrls(data.hits.map(hit => hit.largeImageURL));
      } else {
        console.error('No nature images found in the response.');
      }
    } catch (error) {
      console.error('Error fetching nature images:', error);
    }
  };

  const getNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
  };

  const startSlideshow = () => {
    setIsSlideshowRunning(true);
  };

  const stopSlideshow = () => {
    setIsSlideshowRunning(false);
  };

  return (
    <Container>
      <a href="/spaces/space5" className="url">
        Imanature
      </a>
      <Title>Imanature</Title>
      <Subtitle>Pick from one by one nature images or run 'Pic Play' mode</Subtitle>
      <ImageContainer>
        <Image src={imageUrls[currentImageIndex]} alt="Nature" />
      </ImageContainer>
      <div>
        <Button onClick={getNextImage}>Have another natural image</Button>
        {isSlideshowRunning ? (
          <Button onClick={stopSlideshow}>Stop Pic Play</Button>
        ) : (
          <Button onClick={startSlideshow}>Start Pic Play</Button>
        )}
      </div>
    </Container>
  );
};

export default Space5;
