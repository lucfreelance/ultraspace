import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  max-width: 768px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
  color: #222;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  color: #777;
`;

const Image = styled.img`
  width: 100%;
  max-width: 750px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

const Space3 = () => {
  const URL = 'https://api.thecatapi.com/v1/images/search';
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    getCatImage();
  }, []);

  const getCatImage = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCatImageUrl(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  const handleClick = () => {
    getCatImage();
  };

  return (
    <Container>
      <Card>
        <Title>Random Cats 😹</Title>
        <Subtitle>Because everybody deserves a pussycat 🐈</Subtitle>
        <Button type="button" onClick={handleClick}>
          ¡Give me another 😺!
        </Button>
        <Image id="img-cat" src={catImageUrl} alt="Random cat by thecatapi.com" />
      </Card>
    </Container>
  );
};

export default Space3;
