const SmokeLog = ({ created_date, onRemove, id }) => {
  return (
    <div className="SmokeItem">
      <span>{new Date(created_date).toLocaleString()}</span>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 로그를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        X
      </button>
    </div>
  );
};

export default SmokeLog;
