import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { changeSmokeData } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
    setIsClick(true);
    dispatch(
      changeSmokeData({
        id: new Date().getTime(),
        count: count + 1,
        date: new Date().getTime(),
      })
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setIsClick(false);
    }, 3000);
  }, [isClick]);

  return (
    <div className="Home_button Home_wrapper_column">
      {isClick ? <Loading /> : <button onClick={onClick}>+</button>}
    </div>
  );
};

export default React.memo(Counter);
