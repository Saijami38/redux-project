import React from "react";
import { Button, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedFruitNames,
  resetPersistStore,
} from "../../Redux/Actions/PersistAction";
export default function SelectedNames() {
  const dispatch = useDispatch();
  const { fruits, selectedFruit } = useSelector((state) => state.persistFriuts);

  return (
    <Col span={24}>
      <center>
        {fruits?.map((fruit) => (
          <div
            style={{
              color: "#000",
              maxWidth: "80vw",
              background: fruit === selectedFruit ? "#d7aefb" : "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(selectedFruitNames(fruit))}
          >
            <h1>{fruit}</h1>
          </div>
        ))}
        <Button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            dispatch(resetPersistStore());
          }}
        >
          Reset Store
        </Button>
        <hr></hr>
      </center>
    </Col>
  );
}
