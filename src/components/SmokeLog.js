const SmokeLog = ({ created_date }) => {
  return (
    <div className="SmokeItem">
      <span>{new Date(created_date).toLocaleString()}</span>
      <button>삭제하기</button>
    </div>
  );
};

export default SmokeLog;
