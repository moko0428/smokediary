import styled from "styled-components";
import SmokeLog from "./SmokeLog";

const Wrap = styled.div`
  width: 80%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const List = styled.div`
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 14px;
`;
const Last = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 80%;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 14px;
`;

const Log = styled.div`
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: #ccc;
`;

const SmokeList = ({ smokeList, onDelete }) => {
  return (
    <Container>
      <Last>
        <Title>최근 흡연</Title>
        <Span>
          {smokeList < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(smokeList[0].created_date).toLocaleString()}
        </Span>
      </Last>
      <Wrap>
        <List>
          <Title>흡연 로그</Title>
          <Log>
            {smokeList.map((item) => (
              <SmokeLog key={item.id} {...item} onDelete={onDelete} />
            ))}
          </Log>
        </List>
      </Wrap>
    </Container>
  );
};
SmokeList.defaultProps = {
  smokeList: [],
};
export default SmokeList;
