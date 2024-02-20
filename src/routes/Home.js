import SmokeList from "../components/SmokeList";
import Header from "../components/Header";
import { useContext, useRef, useState } from "react";
import { SmokeDispatchContext, SmokeStateContext } from "../App";

const Home = () => {
  const { onCreate } = useContext(SmokeDispatchContext);
  const smokeData = useContext(SmokeStateContext);
  console.log("smokeData", smokeData);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const dataId = useRef(0);
  const date = new Date();

  const Counter = () => {
    const created_date = date.getTime();
    const newItem = {
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    onCreate(created_date, count + 1);
    setData([newItem, ...data]);
    setCount(count + 1);
  };

  const onRemove = (targetId) => {
    const newSmokeList = data.filter((item) => item.id !== targetId);
    setCount(count - 1);
    setData(newSmokeList);
  };
  return (
    <div className="Home">
      <Header title={"흡연 기록하기"} />
      <div className="Home_wrapper">
        <div className="Home_wrapper_column">
          <div className="Home_date">
            <h2>{`${date.getFullYear()}. ${
              date.getMonth() + 1
            }. ${date.getDate()}.`}</h2>
          </div>
          <div className="Home_count">
            <span>{count}</span>
          </div>
        </div>
        <div className="Home_button Home_wrapper_column">
          <button onClick={Counter}>+</button>
        </div>
      </div>

      <div>
        <SmokeList count={count} smokeList={data} onRemove={onRemove} />
      </div>
    </div>
  );
};
export default Home;
