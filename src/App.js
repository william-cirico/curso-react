import './App.css';
import Card from './components/Card';
import ComponenteCustomizavel from './components/ComponenteCustomizavel';
import PrimeiroComponente from './components/PrimeiroComponente';
import RenderizandoListas from './components/RenderizandoListas';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App red">
      <Card>
        <PrimeiroComponente />
      </Card>
      <Card>
        <SegundoComponente />
      </Card>
      <Card>
        <ComponenteCustomizavel saudacao="E aí meu bom! O meu nome é" />
      </Card>
      <Card>
        <ComponenteCustomizavel titulo="Componente Customizado 👌" saudacao="Olá! O meu nome é" nome="João" />
      </Card>
      <Card>
        <RenderizandoListas />
        <p>Oi</p>
      </Card>
    </div>
  );
}

export default App;
