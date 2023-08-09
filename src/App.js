import "./App.css";
import { Button, Col, Row } from "antd";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Typed from "react-typed";
import Todo from "./Components/TodoApp/Todo";
import User from "./Components/TodoApp/User";
import Data from "./Components/TodoApp/Data";
import TotalRecords from "./Components/TodoApp/TotalRecords";
import SelectedObjects from "./Components/Fruits/SelectedObjects";
import Render1 from "./Components/Fruits/Render1";
import Render2 from "./Components/Fruits/Render2";
import Render3 from "./Components/Fruits/Render3";
import SelectedNames from "./Components/Redux-Persist/SelectedNames";
import Render4 from "./Components/Redux-Persist/Render4";
import Render5 from "./Components/Redux-Persist/Render5";
import Render6 from "./Components/Redux-Persist/Render6";
import HomePage from "./Components/API/HomePage";
import UserDetails from "./Components/ReduxToolkit/UserDetails";

// Separate components for each section
const TitleSection = () => (
  <div style={{ overflow: "hidden" }} className="App">
    <div style={{ padding: "3vw" }} className="titleTyping">
      <Typed
        strings={[
          "No time like the Present.",
          `That's my secret, Captain. I'm always Angry`,
          "I can do this all Day.",
          "Just have a little Faith.",
          "Whatever it Takes.",
          "What more could I lose?",
          "I like this One !?",
          "Dance off Bro!",
          "He's a friend from Work",
        ]}
        typeSpeed={140}
        backSpeed={50}
        loop
      />
    </div>
    <h1 className="titleTyping1">Redux Working</h1>
    <Button onClick={() => (window.location.pathname = "/toolkit")}>
      Tool{" "}
    </Button>
    <Col offset={7} span={12}>
      <Todo />
    </Col>
    <h2>P1</h2>

    <Col span={24}>
      <Row justify={"space-between"}>
        <Col xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <User />
        </Col>
        <Col xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Data />
        </Col>
        <Col xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <TotalRecords />
        </Col>
      </Row>
    </Col>

    <h2>P2</h2>
    <br />
    <Col span={24}>
      <SelectedObjects />
    </Col>
    <br />

    <Col style={{ padding: "5vw" }} span={24}>
      <Row gutter={[16, 16]}>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render1 />
        </Col>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render2 />
        </Col>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render3 />
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <Row gutter={[16, 16]}></Row>
    </Col>
    <Col span={24}>
      <h2>Redux-Persist</h2>
    </Col>
    <br />
    <SelectedNames />
    <br />

    <Col style={{ padding: "5vw" }} span={24}>
      <Row gutter={[16, 16]}>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render4 />
        </Col>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render5 />
        </Col>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <Render6 />
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <h2>Redux-API</h2>
      <Row gutter={[16, 16]}>
        <Col offset={1} xs={24} sm={20} md={16} lg={8} xl={8} xxl={8}>
          <HomePage />
        </Col>
      </Row>
    </Col>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleSection />} />
        <Route path="/redux-project" element={<TitleSection />} />
        <Route path="/toolKit" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
