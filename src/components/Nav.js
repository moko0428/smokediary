import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
const Nav = () => {
  const [isSelect, setIsSelcet] = useState(false);

  const toggle = () => {
    setIsSelcet((prev) => !prev);
    console.log("감지", isSelect);
  };
  return (
    <div className="Nav">
      <div className="Nav-home icons">
        <Link to={"/"} onClick={toggle}>
          <GoHome />
        </Link>
      </div>
      <div className="Nav-report icons">
        <Link to={"/report"}>
          <BsGraphUp clolor="tomato" />
        </Link>
      </div>
      <div className="Nav-diary icons">
        <Link to={"/diary"}>
          <CiCalendar />
        </Link>
      </div>
      <div className="Nav-place icons">
        <Link to={"/place"}>
          <MdOutlinePlace />
        </Link>
      </div>
      <div className="Nav-settings icons">
        <Link to={"/settings"}>
          <CiSettings />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
