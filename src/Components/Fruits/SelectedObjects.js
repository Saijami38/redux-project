import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedObject } from "../../Redux/Actions/fruitAction";

export default function SelectedObjects() {
  const dispatch = useDispatch();
  const { fruits, selectedFruit } = useSelector((state) => state.friuts);

  return (
    <center>
      {fruits?.map((fruit) => (
        <div
          style={{
            color: "#4084f2",
            maxWidth: "10vw",
            background: fruit === selectedFruit ? "#e8eaed" : "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(selectedObject(fruit))}
        >
          <h1>{fruit}</h1>
        </div>
      ))}

      <hr></hr>
    </center>
  );
}
