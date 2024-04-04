import './App.css';
import AddTask from './Components/AddTask';

// Components
import TaskList from './Components/TaskList'

function App() {

  const parentStyle  = {
    textAlign: "center"
  }

  return (
    <>
      <div style={parentStyle}>
        <h1 style={{marginTop: "20px"}}>To do App</h1>
        < AddTask />
        < TaskList />
      </div>
    </>
  );
}

export default App;
