import React from "react";
import { useSelector } from "react-redux";

const SmokeLog = () => {
  const smokeData = useSelector((state) => state.smokeData);
  console.log(smokeData);
  return (
    <div className="SmokeItem">
      <span>{new Date(smokeData.date).toLocaleString()}</span>
    </div>
  );
};

export default React.memo(SmokeLog);
