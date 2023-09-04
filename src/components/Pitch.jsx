import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGrinBeam, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PitchSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const PitchCard = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: #222;

  &:hover {
    background-color: #eaeaea;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const IntroContent = styled.div`
  /* Styles for your visual component or graphic */
`;

const PitchText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Pitch = () => {
  return (
    <>
      <PitchSection>
        <PitchCard to="/" onClick={() => console.log("Card 1 clicked")}>
          <IntroContent>
            <FaHeart size={32} />
          </IntroContent>
          <PitchText>Love, life, and joy in just an ultraplace</PitchText>
        </PitchCard>
        <PitchCard to="/" onClick={() => console.log("Card 2 clicked")}>
          <IntroContent>
            <FaGem size={32} />
          </IntroContent>
          <PitchText>Life, joy, and love in just one ultraplace</PitchText>
        </PitchCard>
        <PitchCard to="/" onClick={() => console.log("Card 3 clicked")}>
          <IntroContent>
            <FaGrinBeam size={32} />
          </IntroContent>
          <PitchText>Joy, love, and life in just 1 ultraplace</PitchText>
        </PitchCard>
      </PitchSection>
    </>
  );
};

export default Pitch;
