const SmokeLog = ({ created_date, onDelete, id }) => {
  return (
    <div className="SmokeItem">
      <span>{new Date(created_date).toLocaleString()}</span>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 로그를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default SmokeLog;
