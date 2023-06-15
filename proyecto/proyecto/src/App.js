/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import ContactCoreComponent from './components/containers/ContactCoreComponent';
import Clock from './components/pure/clock';
import MouseComponent from './components/pure/mouseComponent';
import TaskListComponent from './components/containers/taskListComponent';
import ChuckNorris from './components/pure/ChuckNorris';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';
/* eslint-enable */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Componente lista de tasks */}
          {/* <ContactCoreComponent name="Juanma" last_name="Consigliere" email="jcpiccodev@gmail.com" connected={ false }></ContactCoreComponent> */}
          {/* Componente reloj (ciclo de vida) */}
          {/* <Clock></Clock> */}
        </p>
      {/* <ContactCoreComponent></ContactCoreComponent> */}
      {/* </header> */}
      {/* <MouseComponent></MouseComponent> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <ChuckNorris></ChuckNorris> */}
      <TodosContainer></TodosContainer>
      <TodoFormContainer></TodoFormContainer>
      {/* Filter Options contain Filter Container */}
      <Filteroptions></Filteroptions>
    </div>
  );
}

export default App;
