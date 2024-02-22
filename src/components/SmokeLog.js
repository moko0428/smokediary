import React from "react";

const SmokeLog = ({ date }) => {
  return (
    <div className="SmokeItem">
      <span>{new Date(date).toLocaleString()}</span>
    </div>
  );
};

export default React.memo(SmokeLog);
