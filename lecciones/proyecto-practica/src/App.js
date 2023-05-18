/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/greetingClass';
import GreetingFunction from './components/pure/greetingFunction';
import TaskListComponent from './components/container/TaskListComponent';
import ExampleUseState from './hooks/ExampleUseState';
import ExampleVariousUse from './hooks/ExampleVariousUse';
import ExampleUseContext from './hooks/ExampleUseContext';
import ExampleChildrenProps from './hooks/ExampleChildrenProps';
/* eslint-enable */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Componente propio greeting.jsx con propiedades */}
          {/* <GreetingClass name="Juanma"></Greeting> */}
          {/* Componente propio greetingFunction.jsx con propiedades */}
          {/* <GreetingFunction name="Juanma"></GreetingFunction> */}
          {/* Componente lista de tasks */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* Ejemplos de uso de HOOKS */}
          {/* <ExampleUseState></ExampleUseState> */}
          {/* <ExampleVariousUse></ExampleVariousUse> */}
          {/* <ExampleUseContext></ExampleUseContext> */}
          <ExampleChildrenProps nombre="Martín">
            {/* Todo lo que hay aquí, es tratado como props.children */}
            <h3>
              Contenido del props.children
            </h3>
          </ExampleChildrenProps>
        </p>
      </header>
    </div>
  );
}

export default App;
