import React, { useState } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Input from "./components/Input";

const food = [];
const electronic = [];
const skincare = [];

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [electronicItems, setElectronicItems] = useState([]);
  const [skincareItems, setSkincareItems] = useState([]);

  const formInputsHandler = (inputObj) => {
    if (inputObj.cat === "Electronics") {
      electronic.push(inputObj);
      setElectronicItems(electronic);
    }
    if (inputObj.cat === "Food") {
      food.push(inputObj);
      setFoodItems(food);
    }
    if (inputObj.cat === "Skincare") {
      skincare.push(inputObj);
      setSkincareItems(skincare);
    }
  };

  const deleteButtonHandler=(id,category)=>{
    localStorage.removeItem(id)
    
    if(category==="Electronics"){
     const newElectronicArray= electronic.filter(item=>item.id!==id)
     setElectronicItems(newElectronicArray);
    }
    if(category==="Food"){
      const newFoodArray= food.filter(item=>item.id!==id)
      setFoodItems(newFoodArray);
     }
     if(category==="Skincare"){
      const newSkincareArray= skincare.filter(item=>item.id!==id)
      setSkincareItems(newSkincareArray);
     }

  }

  return (
    <div className="App">
      <Input onSubmit={formInputsHandler} />
      <DashBoard
        foodItems={foodItems}
        electronicItems={electronicItems}
        skincareItems={skincareItems}
        onClick={deleteButtonHandler}
      />
    </div>
  );
}

export default App;
