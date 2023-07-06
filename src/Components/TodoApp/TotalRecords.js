import React from "react";
import { Row, Col, Card } from "antd";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../../Redux/Actions/Todoactions";

export default function TotalRecords() {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => state.todos);

  return (
    <div className="responsive">
      <Row justify="center">
        <Col span={24}>
          <Row>
            <Col xs={24} sm={20} md={16} lg={12} xl={20} xxl={15}>
              <Card
                style={{ textAlign: "left", backgroundColor: "#cbf0f8" }}
                title="TotalRecords.js"
              >
                {toDoList?.length > 0 ? (
                  toDoList.map((v) => (
                    <li onClick={() => dispatch(removeTodo(v))}>{v}</li>
                  ))
                ) : (
                  <h3> Records Empty</h3>
                )}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
