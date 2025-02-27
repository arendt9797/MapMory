import MyPlanCard from '../components/features/MyPlanCard';

const MyPlanPage = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center">수임이가 계획한 여행 일정 리스트</h1>
      <div className="grid gap-10 m-12 grid-cols-3 justify-evenly">
        <MyPlanCard />
        <MyPlanCard />
        <MyPlanCard />
      </div>
    </div>
  );
};

export default MyPlanPage;
