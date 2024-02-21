import SmokeList from "../components/SmokeList";
import Header from "../components/Header";
import { useContext, useEffect, useRef, useState } from "react";
import { SmokeDispatchContext, SmokeStateContext } from "../App";
import Counter from "../components/Counter";

const Home = () => {
  const { onRemove } = useContext(SmokeDispatchContext);
  const smokeData = useContext(SmokeStateContext);

  const [data, setData] = useState(0);

  const date = new Date();

  useEffect(() => {
    if (smokeData.length >= 1) {
      setData(smokeData[0].count);
    }
  }, [smokeData]);
  // const onRemove = (targetId) => {
  //   setData(data - 1);
  // };
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
            <span>{data}</span>
          </div>
        </div>
        <Counter />
      </div>

      <div>
        <SmokeList />
      </div>
    </div>
  );
};
export default Home;
