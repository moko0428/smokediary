// 기능
// - Home에서 카운트된 기록 랜더링 ✅
// 오늘 기준 몇번 흡연 인지 기록 ✅
// 최근 흡연 기록 ✅
// 오늘 흡연 로그 리스트 형태로 랜더링 ❌

const SmokeList = ({ count, dummyList }) => {
  return (
    <div className="smokeList">
      <div>
        <h2>흡연 기록</h2>
        <span>오늘은 {count}번 흡연하셨습니다.</span>
      </div>
      <div>
        <h2>최근 흡연</h2>
        <span>
          {count < 1
            ? "오늘은 흡연을 하지 않았습니다."
            : new Date(dummyList[dummyList.length - 1].date).toLocaleString()}
        </span>
      </div>
      <div>
        {/* 흡연 로그 */}
        <h2>흡연 로그</h2>
        {dummyList.map((item) => (
          <div>{new Date(item.date).toLocaleString()}</div>
        ))}
      </div>
    </div>
  );
};

export default SmokeList;
