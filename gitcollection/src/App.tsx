import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

// App é um componente funcional
const App: React.FC = () =>  {
  return (
    // Vai aparecer na página de acordo com o que foi solicitado na rota
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
