import React, { useContext, useEffect, useState } from "react";
import { SmokeDispatchContext } from "../App";
import Loading from "./Loading";

const Counter = () => {
  const { onCreate } = useContext(SmokeDispatchContext);

  const [data, setData] = useState(0);
  const [isClick, setIsClick] = useState(false);

  const date = new Date();

  const Counter = () => {
    const created_date = date.getTime();
    onCreate(created_date, data + 1);
    setData(data + 1);
    setIsClick(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClick(false);
    }, 3000);
  }, [isClick]);

  return (
    <div className="Home_button Home_wrapper_column">
      {isClick ? <Loading /> : <button onClick={Counter}>+</button>}
    </div>
  );
};

export default React.memo(Counter);
