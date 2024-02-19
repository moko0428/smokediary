import Header from "../components/Header";
import { useState } from "react";

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
      <div>
        <div>
          <button onClick={DecreaseMonth}>{"<"}</button>
          <div>{headText}</div>
          <button onClick={IncreaseMonth}>{">"}</button>
        </div>
      </div>
    </div>
  );
};
export default Diary;
