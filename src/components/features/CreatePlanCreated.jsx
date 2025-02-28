const CreatePlanCreated = () => {
  return (
    <div className="absolute bottom-5 right-5 w-96 h-96 bg-white border-4 border-secondary p-2 rounded-md">
      <form>
        <h3>계획 이름</h3>
        <input type="text" placeholder="계획의 이름은?" />
        <button className="bg-primary">계획 저장하기!</button>
      </form>
      <div className="flex items-center gap-4">
        <div className="bg-white border-2 border-black p-2 rounded-full text-sm w-8 h-8 flex items-center justify-center">
          1
        </div>
        <span>선택한 장소</span>
        <span>선택한 날짜</span>
        <span>선택한 시간</span>
      </div>
    </div>
  );
};

export default CreatePlanCreated;
