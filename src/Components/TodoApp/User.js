import React from "react";
import { Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../../Redux/Actions/Todoactions";

export default function User() {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => state.todos);

  return (
    <div className="responsive">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={20} xxl={15}>
          <Card
            style={{ textAlign: "left", backgroundColor: "#d7aefb" }}
            title="User.js"
          >
            {toDoList?.length > 0 ? (
              toDoList.map((v) => (
                <li key={v} onClick={() => dispatch(removeTodo(v))}>
                  {v}
                </li>
              ))
            ) : (
              <h3>Users Empty</h3>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
