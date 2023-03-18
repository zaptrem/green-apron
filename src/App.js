import logo from './logo.svg';
import './App.css';
import MealPlannerForm from './NewMealPlannerForm';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1 className="App-title">Green Appron</h1>
        <img src="public/images/Fresh-green-apple-on-transparent-background-PNG.png" alt="logo" />
        <em style={{ textAlign: "center" }}> "Meals that fit to you"</em>
        <li>Affordable</li>
        <li>Convenient</li>
        <li>Sustainable</li>
      </header>
      

    

      <div className='meal-planner-form'>
        <MealPlannerForm />
      </div>

    </div>



  );
}

// Wegmans.com 

export default App;
