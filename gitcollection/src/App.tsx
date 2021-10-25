import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globals';

// App é um componente funcional
const App: React.FC = () =>  {
  return (
    // Vai aparecer na página de acordo com o que foi solicitado na rota
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
