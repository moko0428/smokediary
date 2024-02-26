import { useEffect } from "react";
import Header from "../components/Header";

const Place = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `연흡 | 흡연구역`;
  }, []);
  return (
    <div className="Place">
      <Header title={"흡연 장소"} />
      Place
    </div>
  );
};
export default Place;
