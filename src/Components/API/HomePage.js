import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCallApi } from "./../../Redux/Actions/ApiAction";
import { Button, Col, Row, Table } from "antd";
export default function HomePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.apiData);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   dispatch(handleCallApi());
  // }, [dispatch]);

  return (
    <div style={{ padding: "2vw" }}>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <Table
              style={{ width: "100%", overflowX: "auto" }}
              columns={[
                {
                  width: "100px",
                  title: "ORDER ID",
                  dataIndex: "id",
                },
                {
                  width: "100px",
                  title: "TITLE",
                  dataIndex: "title",
                },
                {
                  title: "BODY",
                  dataIndex: "body",
                  render: (body, record) => {
                    return <Col span={24}>{body}</Col>;
                  },
                },
              ]}
              dataSource={data}
            />
            <br />
            <Col span={24}>
              <Button
                onClick={() => {
                  dispatch(handleCallApi());
                }}
              >
                Show Api Data
              </Button>
            </Col>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
