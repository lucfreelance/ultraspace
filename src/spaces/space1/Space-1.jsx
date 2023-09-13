import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #fff;
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 748px;
  position: relative;
  background-color: #333;
  color: #fff;
  border: 2px solid #2196f3;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 20px;
  padding: 20px;
`;

const Header = styled.header`
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #2196f3;
`;

const Banner = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 300px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Anchor = styled.a`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-decoration: none;
`;

const Space1 = () => {
  const [message, setMessage] = useState('');
  const audioUrl =
    'https://www.elongsound.com/images/mp3/reggaedrum_09_167a_bytuneloniration.mp3'; // Reemplaza con la URL del sonido en línea
  const imageUrl = '/src/img/ultraspaces-logo.png'; // Reemplaza con la URL de la imagen que deseas

  const handleClick = () => {
    setMessage('Where you can have fun and take cool breaks');
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <PageContainer>
      <Container>
        <Anchor href="/spaces/space1" className="url">
          Space [1]
        </Anchor>
        <Header>Welcome to Ultraspaces</Header>
        <Banner src={'/src/img/space1.webp'} alt="Ultraspaces friends" />
        <Button onClick={handleClick}>
          Statement 🚀
        </Button>
        {message && <div dangerouslySetInnerHTML={{ __html: message }} />}
      </Container>
    </PageContainer>
  );
};

export default Space1;
