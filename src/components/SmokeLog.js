const SmokeLog = ({ created_date, onRemove, id }) => {
  return (
    <div>
      <span>{new Date(created_date).toLocaleString()}</span>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 로그를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default SmokeLog;
