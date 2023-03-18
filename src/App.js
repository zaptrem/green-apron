import logo from './logo.svg';
import './App.css';
import MealPlannerForm from './NewMealPlannerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MealPlannerForm/>
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello I have made changes
        </p>
        <p>
          Other text
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

// Wegmans.com 

export default App;
