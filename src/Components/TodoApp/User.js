import React from "react";
import { Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../../Redux/Actions/Todoactions";

export default function User() {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => state.todos);

  return (
    <div>
      <Col span={24}>
        <Row>
          <Col offset={1} span={8}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#d7aefb" }}
              //   #cbf0f8 , #fdcfe8 , #d7aefb
              bodyStyle={{ textAlign: "left" }}
              title="User.js"
            >
              {toDoList?.length > 0 ? (
                toDoList.map((v) => (
                  <li onClick={() => dispatch(removeTodo(v))}>{v}</li>
                ))
              ) : (
                <h3> Users Empty</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
