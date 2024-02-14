import { useRef, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 300px;
  border-radius: 14px;
  padding: 20px;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &::placeholder {
    color: #e2e2e2;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 340px;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  border-radius: 14px;

  &:hover {
    background-color: #dddddd;
  }
`;

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
    <Container>
      <Header title={"흡연 설정"} />
      <div>
        <Input
          name="cigarette"
          ref={cigaretteInput}
          value={state.cigarette}
          placeholder="종류를 입력해주세요."
          onChange={onChange}
        />
      </div>
      <div>
        <Input
          name="price"
          ref={priceInput}
          value={state.price}
          type="number"
          placeholder="가격을 입력해주세요."
          onChange={onChange}
        />
      </div>
      <div>
        <Button onClick={onSubmit}>저장</Button>
      </div>
    </Container>
  );
};
export default Settings;
