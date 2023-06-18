import "./App.css";
import { Col, Row } from "antd";
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

function App() {
  return (
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
      <Col offset={7} span={12}>
        <Todo />
      </Col>
      <h2>P1</h2>

      <Col span={24}>
        <Row justify={"space-between"}>
          <Col span={8}>
            <User />
          </Col>
          <Col span={8}>
            <Data />
          </Col>
          <Col span={8}>
            <TotalRecords />
          </Col>
        </Row>
      </Col>

      <h2>P2</h2>
      <br />
      <SelectedObjects />
      <br />

      <Col style={{ padding: "5vw" }} span={24}>
        <Row gutter={[16, 16]}>
          <Col offset={1} span={7}>
            <Render1 />
          </Col>
          <Col span={7}>
            <Render2 />
          </Col>
          <Col span={7}>
            <Render3 />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}></Row>
      </Col>
      <h2>Redux-Persist</h2>
      <br />
      <SelectedNames />
      <br />

      <Col style={{ padding: "5vw" }} span={24}>
        <Row gutter={[16, 16]}>
          <Col offset={1} span={7}>
            <Render4 />
          </Col>
          <Col span={7}>
            <Render5 />
          </Col>
          <Col span={7}>
            <Render6 />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <h2>Redux-API</h2>
        <Row gutter={[16, 16]}>
          <HomePage />
        </Row>
      </Col>
    </div>
  );
}

export default App;
