//App.tsx

import CadastrarTarefa from './components/cadastrar';
import { server } from './mocks/server';

if (process.env.NODE_ENV === 'development') {
  server.start();
}

function App() {
    return (
    <div className="App">
    <CadastrarTarefa />
    </div>
  );
}

export default App;
