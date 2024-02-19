import SmokeLog from "./SmokeLog";

const SmokeList = ({ smokeList, onRemove }) => {
  return (
    <div className="SmokeList">
      <section className="SmokeList_lastest">
        <h2>최근 흡연</h2>
        <span>
          {smokeList < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(smokeList[0].created_date).toLocaleString()}
        </span>
      </section>
      <section className="SmokeList_log">
        <h2>흡연 로그</h2>
        <div className="SmokeList_list_wrapper">
          {smokeList.map((item) => (
            <SmokeLog key={item.id} {...item} onRemove={onRemove} />
          ))}
        </div>
      </section>
    </div>
  );
};
SmokeList.defaultProps = {
  smokeList: [],
};
export default SmokeList;
