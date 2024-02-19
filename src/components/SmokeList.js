import SmokeLog from "./SmokeLog";

const SmokeList = ({ smokeList, onRemove }) => {
  return (
    <div>
      <div>
        <h2>최근 흡연</h2>
        <span>
          {smokeList < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(smokeList[0].created_date).toLocaleString()}
        </span>
      </div>
      <div>
        <div>
          <h2>흡연 로그</h2>
          <div>
            {smokeList.map((item) => (
              <SmokeLog key={item.id} {...item} onRemove={onRemove} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
SmokeList.defaultProps = {
  smokeList: [],
};
export default SmokeList;
