import React from "react";
import { Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../../Redux/Actions/Todoactions";

export default function Data() {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => state.todos);

  return (
    <div>
      <Col span={24}>
        <Row>
          <Col offset={1} span={8}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#fdcfe8" }}
              bodyStyle={{ textAlign: "left" }}
              title="Data.js"
            >
              {toDoList?.length > 0 ? (
                toDoList.map((v) => (
                  <li onClick={() => dispatch(removeTodo(v))}>{v}</li>
                ))
              ) : (
                <h3> Data Empty</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
