import SmokeList from "../components/SmokeList";
import Header from "../components/Header";
import { useEffect } from "react";
import Counter from "../components/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const smokeData = useSelector((state) => state.smokeData);
  const date = new Date();

  console.log(smokeData.count);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];

    titleElement.innerHTML = `연흡`;
  }, []);

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
            <span>{smokeData.count}</span>
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
