import logo from './images/AgHacksLogo.png';
import convience from './images/convience.png';
import affordable from './images/Dollar_Sign.png';
import sustainable from './images/sustainable.png';
import './App.css';
import MealPlannerForm from './NewMealPlannerForm';
import React, { useState } from 'react';
import ChatGPT from './ChatGPT';
import FoodList from './NewFoodList';
import FakeLoader from './FakeLoader';

function App() {
  const [foodList, setFoodList] = useState(false);
  return (
    <div className="app">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Green Apr</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="home" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="login" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <button class="button"> Help mitigate food waste </button>
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
      </div><div className="timeline-head">

        <h1>Easy as...</h1>
        <h1>Input, Choose, and Pick up!</h1>
        <br /> <br />
        <em>"Green Apron handles all the heavy lifting so you can get the light salting!"</em>
        <br /> <br />
      </div>
      <div className="timeline">
        <main>
          <p>Dietary restrictions? Feeding a large family? In-laws don't like cilantro? We've got you covered. Easily input your Preferences for a personal experience. </p>
          <p>Our AI model uses NLP to automatically find the yummiest and most affordable recipes from stores closest to you! We'll show you our best picks, and you choose your favorite! Don't like what we suggested? You can refine and regenerate easily. </p>
          <p>When you click "buy," we send a special request to the store to let them know you're coming. Like any contactless pickup, your freshly discounted ingredients will be waiting for you.</p>
          <p>Follow our custom recipe... et voila!</p>

          <h3></h3>
        </main>



      </div>


      <div className="wavy-line-break" id='break3'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>




      <div className='meal-planner-form'>
        <h2>Ready to Give it a Try?</h2>
        {foodList ? <FakeLoader><FoodList /></FakeLoader> : <MealPlannerForm onSubmit={() => setFoodList(true)} />}
      </div>

      <footer>
        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by
          Gabriella, Ming, Armita, Ryan, and Danish, for Cornell's Digital Ag Hackathon</p>
        <em>
          <p>Developed in Node JS with the OpenAI API.</p>
        </em>
        <p>
          <a href="mailto:mtd64@cornell.edu">Contact us</a> | Copyright 2023 </p>
      </footer>
    </div>
  );
}

export default App;

