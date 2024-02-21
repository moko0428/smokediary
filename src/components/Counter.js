import React, { useContext, useState } from "react";
import { SmokeDispatchContext } from "../App";

const Counter = () => {
  const { onCreate } = useContext(SmokeDispatchContext);

  const [data, setData] = useState(0);

  const date = new Date();

  const Counter = () => {
    const created_date = date.getTime();
    onCreate(created_date, data + 1);
    setData(data + 1);
  };

  return (
    <div className="Home_button Home_wrapper_column">
      <button onClick={Counter}>+</button>
    </div>
  );
};

export default React.memo(Counter);
