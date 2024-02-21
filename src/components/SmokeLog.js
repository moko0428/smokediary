import React, { useContext, useEffect, useState } from "react";
import { SmokeStateContext } from "../App";

const SmokeLog = () => {
  const smoke = useContext(SmokeStateContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (smoke.length >= 1) {
      setData(smoke[0].date);
    }
  }, [smoke]);

  return (
    <div className="SmokeItem">
      <span>{new Date(data).toLocaleString()}</span>
      <button
        onClick={() => {
          // console.log(id);
          if (window.confirm(`${0}번째 로그를 정말 삭제하시겠습니까?`)) {
            // onRemove(id);
          }
        }}
      >
        X
      </button>
    </div>
  );
};

export default React.memo(SmokeLog);
