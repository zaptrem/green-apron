import logo from './images/AgHacksLogo.png';
import './App.css';
import MealPlannerForm from './NewMealPlannerForm';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Green Apron</h1>
        </div>
        <em style={{ textAlign: "center" }}> "Meals that fit to you"</em>

      </header>

      {/* wavy line break */}
      <div className="wavy-line-break" id='break1'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      

  

      <div className="benefitsGrid">
        <div className="benefitsGridItem">
          <h2>Affordable</h2>
          <p>
            Green Apron is a meal planning service that is affordable for everyone. Groceries that are low-cost and healthy, for your entire family.
          </p>
        </div>
        <div className="benefitsGridItem">
          <h2>Convenient</h2>
          <p>
            Just choose the recipe you want for tonight, and Green Apron handles the rest. No hidden costs, and pick up everything on the way home!
          </p>
        </div>
        <div className="benefitsGridItem">
          <h2>Sustainable</h2>
          <p>
            We sources from store's overstock and local farmers to reduce food waste. Food that would otherwise go to waste can be your next dinner!
          </p>
        </div>
      </div>

      <div className="wavy-line-break" id='break2'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>




      <h2>Ready to get started?</h2>
      {/* button that scrolls down when clicked */}
      <button className="scroll-down-button" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36px" height="36px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8V4l8 8-8 8v-4H4V8z" />
        </svg>
      </button>


      <div className='meal-planner-form'>
        <MealPlannerForm />
      </div>
    </div >





  );
}

// Wegmans.com 

export default App;
