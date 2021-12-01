import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';

function App() {
  const [foodsArr, setFoods] = useState(foods);
  const [copyFoods, setCopyFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [todayData, setToday] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };
    setFoods([newFood, ...foodsArr]);
    setShowForm(false);
  }

  function handleToggle() {
    setShowForm(!showForm);
  }

  function handleSearch(event) {
    let word = event.target.value;
    let filteredFood = foodsArr.filter((food) => {
      return food.name.toLowerCase().includes(word.toLowerCase());
    });
    setCopyFoods(filteredFood);
  }

  function handleClick(food, qty) {
    let todayFood = {
      name: food.name,
      calories: food.calories,
      quantity: qty,
    };

    setToday([todayFood, ...todayData]);
  }

  function handleDelete(index) {
    let filteredFood = todayData.filter((elem, i) => {
      return index !== i;
    });

    setToday(filteredFood);
  }

  let total = todayData.map((elem) => elem.quantity * elem.calories);
  total = total.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1 className="title">IronNutrition</h1>
      <Search btnSearch={handleSearch} />
      {showForm ? (
        <AddForm btnSubmit={handleSubmit} />
      ) : (
        <button onClick={handleToggle} className="button is-link">
          Show Form
        </button>
      )}

      <div className="columns">
        <div className="column">
          {copyFoods.map((elem) => {
            return <FoodBox foods={elem} btnClick={handleClick} />;
          })}
        </div>
        <div className="column">
          <h1 className="title">Today's food</h1>
          <ul>
            {todayData.map((elem, index) => {
              return (
                <Total
                  todayData={elem}
                  index={index}
                  btnDelete={handleDelete}
                />
              );
            })}
          </ul>
          <p>Total: {total} cal</p>
        </div>
      </div>
    </div>
  );
}

export default App;
