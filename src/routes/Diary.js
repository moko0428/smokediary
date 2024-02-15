import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

const Content = styled.div`
  display: flex;
`;

const DiaryHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 20px 0px;
  font-size: 25px;
  white-space: nowrap;
  width: 25%;
`;
const DiaryDate = styled.div`
  width: 50%;
  text-align: center;
  font-size: 25px;
`;
const Diary = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const IncreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const DecreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
  return (
    <div>
      <Header title={"흡연 다이어리"} />
      <Content>
        <DiaryHeader>
          <Button onClick={DecreaseMonth}>{"<"}</Button>
          <DiaryDate>{headText}</DiaryDate>
          <Button onClick={IncreaseMonth}>{">"}</Button>
        </DiaryHeader>
      </Content>
    </div>
  );
};
export default Diary;
