import React, { useContext, useEffect, useState } from "react";
import SmokeLog from "./SmokeLog";
import { SmokeStateContext } from "../App";
import { FiRefreshCw } from "react-icons/fi";
import { useSelector } from "react-redux";

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
  } else if (hours > 60 * 60 * 24) {
    return <span>하루전</span>;
  }
};
const SmokeList = () => {
  const smokeData = useSelector((state) => state.smokeData);

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
              {smokeData < 1
                ? "오늘은 흡연을 하지 않았습니다."
                : beforeTime(new Date(), new Date(smokeData.date))}
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
          {/* {data.map((item) => (
            <SmokeLog key={item.id} {...item} />
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default React.memo(SmokeList);
