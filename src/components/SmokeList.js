import React, { useContext, useEffect, useState } from "react";
import SmokeLog from "./SmokeLog";
import { SmokeStateContext } from "../App";

const SmokeList = () => {
  const smoke = useContext(SmokeStateContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (smoke.length >= 1) {
      setData(smoke);
    }
  }, [smoke]);

  return (
    <div className="SmokeList">
      <section className="SmokeList_lastest">
        <h2>최근 흡연</h2>
        <span>
          {data < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(data[0].date).toLocaleString()}
        </span>
      </section>
      <section className="SmokeList_log">
        <h2>흡연 로그</h2>
        <div className="SmokeList_list_wrapper">
          {data.map((item) => (
            <SmokeLog key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default React.memo(SmokeList);
