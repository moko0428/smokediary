import Calendar from "../components/Calendar";
import Header from "../components/Header";
import { useEffect } from "react";

const Diary = () => {
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
