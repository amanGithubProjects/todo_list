import React, { useState } from "react";
import Listnote from "./Listnote";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h2> 🧩 List app 🧩</h2>
          <br />
          <input
            type="text"
            placeholder="Add into list"
            value={inputList}
            onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <Listnote
                  key={index}
                  id={index}
                  text={itemval}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
