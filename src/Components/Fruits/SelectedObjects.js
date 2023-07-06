import React from "react";
import { Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectedObject } from "../../Redux/Actions/fruitAction";

export default function SelectedObjects() {
  const dispatch = useDispatch();
  const { fruits, selectedFruit } = useSelector((state) => state.friuts);

  return (
    <Col span={24}>
      <center>
        {fruits?.map((fruit) => (
          <div
            style={{
              color: "#007acc",
              maxWidth: "80vw",
              background: fruit === selectedFruit ? "#ffe846" : "white",
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
    </Col>
  );
}
