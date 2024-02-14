import styled from "styled-components";
import { Span } from "./SmokeList";

const Item = styled.div`
  width: 80%;
  border-bottom: 1px solid #e2e2e2;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const SmokeLog = ({ created_date, onDelete, id }) => {
  return (
    <Item>
      <Span>{new Date(created_date).toLocaleString()}</Span>
      <Button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 로그를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </Button>
    </Item>
  );
};

export default SmokeLog;
