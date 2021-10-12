import React from "react";
import RandomMeal from "./components/RandomMeal"


function App() {
  return (
    <div className="App">

      <section className="container">
        <h2>Featured Meal</h2>
        <RandomMeal />
      </section>
    </div>
  );
}

export default App;
