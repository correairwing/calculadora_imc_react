import Imctable from './components/Tabela';
import EstiloGlobal, { Container } from '../style';
import ImagemTabela from './components/Imagem';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <h1>Calculadora de IMC</h1>
        <Imctable />
        <ImagemTabela />
      </Container>
    </>
  )
}

export default App
