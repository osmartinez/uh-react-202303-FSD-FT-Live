import { useReducer, useState } from 'react';
import './App.css';
import InputTareaComponent from './components/input-tarea.component';
import ListaTareasComponent from './components/lista-tareas.component';
import { ESTADO_INICIAL, reducer } from './reducers/tareas.reducer';
import TareasContext from './contexts/tareas.context';
function App() {

  const [state, dispatch] = useReducer(reducer, ESTADO_INICIAL)

  return (
    <div className="App">
      <TareasContext.Provider value={{state, dispatch}}>
        <InputTareaComponent></InputTareaComponent>
        <ListaTareasComponent></ListaTareasComponent>
      </TareasContext.Provider>

    </div>
  );
}

export default App;
