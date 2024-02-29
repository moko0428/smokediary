import { useEffect } from "react";
import Header from "../components/Header";

// import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

const Report = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `연흡 | 보고서`;
  }, []);

  return (
    <div className="Report">
      <Header title={"흡연 보고서"} />
      <Accordion className="Report_accordion" defaultActiveKey={"0"}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Current Month</Accordion.Header>
          <Accordion.Body>1주 : 20개</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Current Year</Accordion.Header>
          <Accordion.Body>1주 : 20개</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Total</Accordion.Header>
          <Accordion.Body>1주 : 20개</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="Report_accordion" defaultActiveKey={"0"}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>총 누적</Accordion.Header>
          <Accordion.Body>1주 : 20개</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>담배 살 돈 아꼈으면</Accordion.Header>
          <Accordion.Body>람보르기니 우르스 약 2억9천만원 </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>기타</Accordion.Header>
          <Accordion.Body>기타</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Report;
