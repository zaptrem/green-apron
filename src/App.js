import logo from './images/AgHacksLogo.png';
import convience from './images/convience.png';
import affordable from './images/Dollar_Sign.png';
import sustainable from './images/sustainable.png';
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
        <h2><em style={{ textAlign: "center" }}> "Meals that fit to you"</em></h2>
      </header>
      <div className="wavy-line-break" id='break1'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="benefitsGrid">
        <div className="benefitsGridItem">
          <h2>Affordable</h2>
          <img src={affordable} alt="dollar sign" />
          <p>
            Green Apron is a meal planning service that is affordable for everyone. Groceries that are low-cost and healthy, for your entire family.
          </p>
        </div>
        <div className="benefitsGridItem">
          <h2>Convenient</h2>
          <img src={convience} alt="car" />
          <p>
            Just choose the recipe you want for tonight, and Green Apron handles the rest. No hidden costs, and pick up everything on the way home!
          </p>
        </div>
        <div className="benefitsGridItem">
          <h2>Sustainable</h2>
          <img src={sustainable} alt="earth" />
          <p>
            We source from stores and local farmers' overstock. Food that would otherwise go to waste can be your next dinner!
          </p>
        </div>
      </div>




      <div className="wavy-line-break" id='break2'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>


      <div className="scroll-down">
        <h2>Ready to get started?</h2>
        {/* button that scrolls down when clicked */}
        <button onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
          &#8595;
        </button>
      </div>


      <div className='meal-planner-form'>
        <MealPlannerForm />
      </div>
    </div>
  );
}


// Wegmans.com 

export default App;
