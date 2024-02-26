import Calendar from "../components/Calendar";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Diary = () => {
  // const [curDate, setCurDate] = useState(new Date());
  // const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // const IncreaseMonth = () => {
  //   setCurDate(
  //     new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
  //   );
  // };
  // const DecreaseMonth = () => {
  //   setCurDate(
  //     new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
  //   );
  // };

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `연흡 | 다이어리`;
  }, []);
  return (
    <div>
      <Header title={"흡연 다이어리"} />
      <div>
        {/* <div>
          <button onClick={DecreaseMonth}>{"<"}</button>
          <div>{headText}</div>
          <button onClick={IncreaseMonth}>{">"}</button>
        </div> */}
        <Calendar />
      </div>
    </div>
  );
};
export default Diary;
