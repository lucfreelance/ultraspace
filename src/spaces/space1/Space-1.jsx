import React, { useState } from 'react';
import styled from 'styled-components';

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
  border: 2px solid white; /* Borde blanco */
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

const MessageContainer = styled.div`
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const MiniButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white; /* Borde blanco */
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white; /* Borde blanco */
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #1e87db;
  }
`;

const ShareButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white; /* Borde blanco */
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #1e87db;
  }
`;

const Space1 = () => {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const audioUrl =
    'https://www.elongsound.com/images/mp3/reggaedrum_09_167a_bytuneloniration.mp3';
  const imageUrl = 'https://i.imgur.com/rNrrmlf.png';

  const handleClick = () => {
    setMessage('Where you can have fun and take cool breaks!');
    playAudio();
    setShowMessage(true);
  };

  const handleReset = () => {
    setMessage('');
    setShowMessage(false);
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
        <Banner src={imageUrl} alt="Ultraspaces friends" />
        <Button onClick={handleClick}> 
          Statement 🚀
        </Button>
        {showMessage && (
          <div><br />
            <MessageContainer>
              <div dangerouslySetInnerHTML={{ __html: message }} />
            </MessageContainer>
            <ButtonGroup>
              <ShareButton>Share[Soon]</ShareButton>
              <MiniButton onClick={handleReset}>Reset</MiniButton>
              <HomeButton onClick={() => window.location.href = "/spaces"}>Home</HomeButton>
            </ButtonGroup>
          </div>
        )}
      </Container>
    </PageContainer>
  );
};

export default Space1;
