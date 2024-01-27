import React, { useState } from "react";
import { Button, Row, Col, Input } from "antd";
import "../../App.css";
import { useDispatch } from "react-redux";

import { handleSubmit } from "../../Redux/Actions/Todoactions";

export default function Todo() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  // const [toDoList, setToDoList] = useState([]);

  const handleClick = () => {
    dispatch(handleSubmit(inputValue));
    setInputValue("");
  };
  return (
    <div>
      <Col xs={24} sm={20} md={16} lg={12} xl={20} xxl={15}>
        <Row gutter={[16, 16]} style={{ justifyItems: "center" }}>
          <Col span={18}>
            <Input
              style={{}}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <br />
      </Col>
    </div>
  );
}
