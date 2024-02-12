// 기능
// - Home에서 카운트된 기록 랜더링 ✅
// 오늘 기준 몇번 흡연 인지 기록 ✅
// 최근 흡연 기록 ✅
// 오늘 흡연 로그 리스트 형태로 랜더링 ❌

import SmokeLog from "./SmokeLog";

const SmokeList = ({ smokeList, onDelete }) => {
  return (
    <div className="SmokeList">
      <div className="SmokeList-last">
        <h2>최근 흡연</h2>
        <span>
          {smokeList < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(smokeList[0].created_date).toLocaleString()}
        </span>
      </div>
      <div className="SmokeList-Log">
        <h2>흡연 로그</h2>
        <div className="SmokeList-Log_list">
          {smokeList.map((item) => (
            <SmokeLog key={item.id} {...item} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};
SmokeList.defaultProps = {
  smokeList: [],
};
export default SmokeList;
