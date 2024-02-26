import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { SmokeStateContext } from "../App";

const Report = () => {
  const smokeData = useContext(SmokeStateContext);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `연흡 | 보고서`;
  }, []);
  return (
    <div>
      <Header title={"흡연 보고서"} />
      <div>
        <div>
          <h2>내가 핀 담배 종류</h2>
          <span>이름 개수</span>
        </div>
      </div>
    </div>
  );
};
export default Report;
