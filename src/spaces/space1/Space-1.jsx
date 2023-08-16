import { useState } from 'react';
import styled from 'styled-components';
// import Blog1Top from './block-1.png';
import './custom.css';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CardHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 200px;
`;

const CardMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const CardInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 300px;
`;

const ResultButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const ResultMessage = styled.p`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StartOverButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Title = styled.h2`
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px;
`;

const Space1 = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [result, setResult] = useState('');

  const btnOnClick = () => {
    const sumaInputs =
      "The other day I met " +
      input1 +
      " on my last vacation to " +
      input2 +
      ". I invited them to play " +
      input3 +
      ". They said they prefer " +
      input4 +
      " over that. I felt like a " +
      input5 +
      " attack, or worse, like " +
      input6 +
      ". Then I wanted to invite them to " +
      input7 +
      ", and they accepted! I told them we could have a great time doing something cool like " +
      input8 +
      " and I suggested betting on who pays for dinner 😊. Guess who won? The answer is obvious, Watson... 🍺🍛😂🤣🍛🍺";
    setResult(sumaInputs);
  };

  const resetInputs = () => {
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    setInput5('');
    setInput6('');
    setInput7('');
    setInput8('');
    setResult('');
  };

  return (
    <CardContainer>
      <Title>Crystal Ball Story</Title>
      <CardHeader>
        <CardImage src="https://i.imgur.com/V9J9qBt.png" title="Answer questions to the Ball and receive a fun interactive story based on your answers" alt="Answer questions to the Ball and receive a fun interactive story based on your answers" />
      </CardHeader>
      <CardMain>
        <CardInput
          id="trozo1"
          placeholder="🎭 Your favorite actor / actress"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <CardInput
          id="trozo2"
          placeholder="🌠 Best vacation destination"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <CardInput
          id="trozo3"
          placeholder="🧗‍♂️ Your favorite hobby"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <CardInput
          id="trozo4"
          placeholder="🤬 Famous person who annoys you more"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
        <CardInput
          id="trozo5"
          placeholder="😱 Your deepest fear [If possible to say]"
          value={input5}
          onChange={(e) => setInput5(e.target.value)}
        />
        <CardInput
          id="trozo6"
          placeholder="😭 Most intense event ever ⬆️ Same"
          value={input6}
          onChange={(e) => setInput6(e.target.value)}
        />
        <CardInput
          id="trozo7"
          placeholder="🥳 Favorite Saturday activity"
          value={input7}
          onChange={(e) => setInput7(e.target.value)}
        />
        <CardInput
          id="trozo8"
          placeholder="😎 Favorite Sunday activity"
          value={input8}
          onChange={(e) => setInput8(e.target.value)}
        />
        <p className="resultado" >
          <ResultButton id="btnCalcular" onClick={btnOnClick}>
            🔥 Press the button 🔥 for the story❗
          </ResultButton>
        </p>
        {result && (
          <ResultMessage id="result" className="result-message">
            {result}
          </ResultMessage>
        )}
      </CardMain>
      <StartOverButton onClick={resetInputs}>Start over...</StartOverButton>
      <span className="oculto"></span>
    </CardContainer>
  );
};

export default Space1;
