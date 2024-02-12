import Header from "../components/Header";

const smoke = {
  current: 0,
  day: 1,
  week: [7, 7, 7, 7, 7, 7, 7],
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  year: [],
  money: 0,
  pack: 0,
  //   dayTimeRange: 0,
  total: 0,
  //   time: [new Date().getTime()], 미구현
};
const Report = () => {
  return (
    <div className="Report">
      <Header title={"흡연 보고서"} />
      <div className="Report-column">
        <div>
          <span>{smoke.current}</span>
          <span>오늘</span>
        </div>
        <div>
          <span>{smoke.week.reduce((a, c) => a + c)}</span>
          <span>주</span>
        </div>
        <div>
          <span>{smoke.month.reduce((a, c) => a + c)}</span>
          <span>달</span>
        </div>
        <div>
          <span>{smoke.year}</span>
          <span>년</span>
        </div>
      </div>
      <div className="Report-column">
        <div>
          <span>{smoke.money}</span>
          <span>원</span>
        </div>
        <div>
          <span>{smoke.pack}</span>
          <span>갑</span>
        </div>
        <div>
          <span>{smoke.total}</span>
          <span>합계</span>
        </div>
      </div>
    </div>
  );
};
export default Report;
