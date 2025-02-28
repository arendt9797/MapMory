const CreatePlanCreation = ({ setConfirmedMarkers, tempMarker, setTempMarker }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tempMarker) return;

    setConfirmedMarkers((prev) => [
      ...prev,
      { ...tempMarker, number: prev.length + 1 } // 확정 시 번호 부여
    ]);

    // 제출 후 임시 마커 제거
    setTempMarker(null); 
  };
  
  return (
    <div className="absolute top-5 right-5 w-96 h-72 bg-white border-4 border-secondary p-2 rounded-md">
      <h1>너가 찍은 곳은 여기야!</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" placeholder="메모메모" />
        <input type="date" />
        <input type="time" />
        <button type="submit" className="w-20 bg-primary">
          추가하기!
        </button>
      </form>
    </div>
  );
};

export default CreatePlanCreation;
