import { useEffect, useRef, useState } from "react";
import SmokeList from "../components/SmokeList";
import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [isDate, setIsDate] = useState(new Date().getMinutes());
  const dataId = useRef(0);

  const date = new Date();

  const [count, setCount] = useState(0);

  const Counter = () => {
    const created_date = date.getTime();
    const newItem = {
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
    setCount((count) => count + 1);
  };
  const onDelete = (targetId) => {
    const newSmokeList = data.filter((item) => item.id !== targetId);
    setCount((count) => count - 1);
    setData(newSmokeList);
  };

  return (
    <div className="Home">
      <Header title={"흡연 기록하기"} />
      <div className="Home-date">
        <h2>{`${date.getFullYear()}.${
          date.getMonth() + 1
        }.${date.getDate()}`}</h2>
      </div>
      <div className="Home-count">
        <span>{count}</span>
      </div>
      <div className="Home-button">
        <button onClick={Counter}>
          <svg
            width="100"
            height="85"
            viewBox="0 0 100 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 70H87.5V85H80V70ZM0 70H75V85H0V70ZM70.15 41H62.5C57.4 41 53.25 36.1 53.25 31C53.25 25.9 57.4 22.25 62.5 22.25V14.75C53.25 14.75 45.75 22.25 45.75 31.5C45.75 40.75 53.25 48.25 62.5 48.25H70.15C75.4 48.25 80 51.95 80 58.5V65H87.5V56.8C87.5 47.75 79.5 41 70.15 41ZM92.5 70H100V85H92.5V70ZM84.25 28.65C87.35 25.6 89.25 21.4 89.25 16.75C89.25 7.5 81.75 0 72.5 0V7.5C77.6 7.5 81.75 11.65 81.75 16.75C81.75 21.85 77.6 26 72.5 26V33.5C83.7 33.5 92.5 42.65 92.5 53.85V65H100V53.8C100 42.7 93.6 33.1 84.25 28.65Z"
              fill="#48A823"
            />
          </svg>
        </button>
      </div>
      <SmokeList smokeList={data} onDelete={onDelete} />
    </div>
  );
};
export default Home;
