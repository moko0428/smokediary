import React, { useContext, useEffect, useState } from "react";
import SmokeLog from "./SmokeLog";
import { SmokeStateContext } from "../App";
import { FiRefreshCw } from "react-icons/fi";

const beforeTime = (cur, past) => {
  const seconds = Math.floor((cur.getTime() - past.getTime()) / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  if (seconds < 60) {
    return <span>{`${Math.floor(seconds)}초 전`}</span>;
  } else if (minutes < 60 * 60) {
    return <span>{`${Math.floor(minutes)}분 전`}</span>;
  } else if (hours < 60 * 60 * 24) {
    return <span>{`${Math.floor(hours)}시간 전`}</span>;
  }
};
const SmokeList = () => {
  const smoke = useContext(SmokeStateContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(Math.floor(new Date().getTime() - data[0].date) / 1000);
  }, [data]);
  useEffect(() => {
    if (smoke.length >= 1) {
      setData(smoke);
    }
  }, [smoke]);

  const reRender = () => {
    window.location.reload();
  };
  return (
    <div className="SmokeList">
      <section className="SmokeList_lastest">
        <h2>최근 흡연</h2>
        <div className="lastest_wrapper">
          <div className="lastest_span">
            <span>
              {data < 1
                ? "오늘은 흡연을 하지 않았습니다."
                : beforeTime(new Date(), new Date(data[0].date))}
            </span>
          </div>
          <div className="lastest_btn">
            <button onClick={reRender}>
              <FiRefreshCw />
            </button>
          </div>
        </div>
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
