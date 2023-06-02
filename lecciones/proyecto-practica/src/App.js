/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/taskListComponent';
import GreetingClass from './components/pure/greetingClass';
import GreetingFunction from './components/pure/greetingFunction';
import ExampleUseState from './hooks/ExampleUseState';
import ExampleVariousUse from './hooks/ExampleVariousUse';
import ExampleUseContext from './hooks/ExampleUseContext';
import ExampleChildrenProps from './hooks/ExampleChildrenProps';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
/* eslint-enable */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        {/* <ExampleChildrenProps nombre="Martín"> */}
          {/* Todo lo que hay aquí, es tratado como props.children */}
          {/* <h3>
            Contenido del props.children
          </h3>
        </ExampleChildrenProps> */}
        {/* <Greetingstyled name="Juanma"></Greetingstyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <Loginformik></Loginformik> */}
      {/* <RegisterFormik></RegisterFormik> */}
    </div>
  );
}

export default App;
