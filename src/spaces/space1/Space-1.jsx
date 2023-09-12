import { useState } from 'react';
import styled from 'styled-components';

// Estilos para el contenedor principal
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 768px;
  height: 768px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Estilos para la columna izquierda
const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: center; /* Centrar el texto en la columna izquierda */

  @media (max-width: 767px) {
    padding-right: 0;
  }
`;

// Estilos para la columna derecha
const RightColumn = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

// Estilos para el encabezado
const CardHeader = styled.header`
  text-align: left;
  margin-bottom: 20px;
`;

// Estilos para la imagen
const CardImage = styled.img`
  width: 350px;
`;

// Estilos para el título
const Title = styled.h2`
  background-color: #2196f3;
  color: white;
  padding: 5px;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 10px;
`;

// Estilos para el contenido principal
const CardMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
  margin-right: 20px;
`;

// Estilos para los campos de entrada
const CardInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

// Estilos para el botón de resultado
const ResultButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

// Estilos para el mensaje de resultado
const ResultMessage = styled.p`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
      " and I suggested betting on who pays for dinner. Guess who won? The answer is obvious, Watson... 🍺😂🤣";
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
      <LeftColumn>
        <a
          href="/spaces/space1"
          className="url"
        >
          Crystal Ball Story 4 Storylovers
        </a> <br />
        <CardHeader>
          <CardImage
            src="https://i.imgur.com/V9J9qBt.png"
            title="Answer questions to the Ball and receive a fun interactive story based on your answers"
            alt="Answer questions to the Ball and receive a fun interactive story based on your answers"
          />
        </CardHeader>
        <CardMain>
          {/* Puedes agregar contenido adicional aquí si es necesario */}
        </CardMain>
        <span className="oculto"></span>     
        <br /><br /><br /><br /><br /><br /> 
        <Title>Crystal Ball Story 4 Storylovers</Title>
      </LeftColumn>
      <RightColumn>
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
          <p className="resultado">
            <ResultButton id="btnCalcular" onClick={btnOnClick}>
              Press the button for the story
            </ResultButton>
          </p>
          {result && (
            <ResultMessage id="result" className="result-message">
              {result}
            </ResultMessage>
          )}
        </CardMain>
      </RightColumn>
    </CardContainer>
  );
};

export default Space1;
