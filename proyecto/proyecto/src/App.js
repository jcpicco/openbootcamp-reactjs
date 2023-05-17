/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import ContactCoreComponent from './components/container/ContactCoreComponent';
/* eslint-enable */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Componente lista de tasks */}
          <ContactCoreComponent name="Juanma" last_name="Consigliere" email="jcpiccodev@gmail.com" connected={ false }></ContactCoreComponent>
        </p>
      </header>
    </div>
  );
}

export default App;
