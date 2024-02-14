import styled from "styled-components";

const MyHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 36px;
  border-bottom: 1px solid #e2e2e2;
  justify-content: center;
`;

const Text = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
const Header = ({ title }) => {
  return (
    <MyHeader>
      <Text>{title}</Text>
    </MyHeader>
  );
};
export default Header;
