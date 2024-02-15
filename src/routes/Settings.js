import { useRef, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 300px;
  border-radius: 14px;
  padding: 30px 40px;
  font-size: 20px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #ddd;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 380px;
  padding: 30px 30px;
  cursor: pointer;
  border: none;
  border-radius: 14px;
  font-size: 24px;

  &:hover {
    background-color: #64c964;
  }
`;
const InputWrap = styled.div`
  padding-top: 40px;
  & div {
    padding-bottom: 20px;
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
      <InputWrap>
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
      </InputWrap>
      <div>
        <Button onClick={onSubmit}>저장</Button>
      </div>
    </Container>
  );
};
export default Settings;
