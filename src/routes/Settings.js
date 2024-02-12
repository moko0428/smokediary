import { useRef, useState } from "react";
import Header from "../components/Header";

const Settings = () => {
  const cigaretteInput = useRef();
  const priceInput = useRef();
  const [state, setState] = useState({
    cigarette: "",
    price: "",
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (state.cigarette.length < 1) {
      cigaretteInput.current.focus();
      return;
    }
    if (state.price.length < 4) {
      priceInput.current.focus();
      return;
    }
    setState({
      cigarette: "",
      price: "",
    });
    alert("저장 성공");
  };
  return (
    <div className="Settings">
      <Header title={"흡연 설정"} />
      <div>
        <input
          name="cigarette"
          ref={cigaretteInput}
          value={state.cigarette}
          placeholder="종류를 입력해주세요."
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name="price"
          ref={priceInput}
          value={state.price}
          type="number"
          placeholder="가격을 입력해주세요."
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onSubmit}>저장</button>
      </div>
    </div>
  );
};
export default Settings;
