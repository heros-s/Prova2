//index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CadastrarTarefa from './components/cadastrar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CadastrarTarefa />
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho do seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
