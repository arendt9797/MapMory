const MyPlanCard = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-8 w-80 h-96 border-2 border-black">
      <div className="w-full h-64 bg-slate-400">이미지가 들어갈</div>
      <div className="flex flex-col gap-3">
        <p className="text-secondary">2025.02.25 - 2025.02.27의 일정</p>
        <h2 className="font-bold text-2xl text-secondary">제주도를 가봅시다!</h2>
        <p className="text-gray-500">
          1일차: 공항-{'>'}어디어디-{'>'}어디갔다가-{'>'}숙소 <br />
          2일차: 숙소-{'>'}어디어디-{'>'}어디갔다가-{'>'}숙소 <br />
          3일차: 숙소-{'>'}어디어디-{'>'}어디갔다가-{'>'}공항
        </p>
      </div>
    </div>
  );
};

export default MyPlanCard;
