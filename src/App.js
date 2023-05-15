import React, { useState } from "react";
import data from './data'
import Tours from "./Components/Tours";

const App = () => {

  

  const [tours, setTours] = useState(data);

  // filter for removung the not interested tour
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }

  // If All tours are removed the what need to be seen on website
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
