import Text from '../commons/Text';
import Title from '../commons/Title';

export const DetailPlanList = ({ detailPlans, plan, markerMemo }) => {
  let day = 0;
  let detailDay = 0;

  return (
    <>
      <div className="w-1/3 bg-white shadow-2xl absolute top-0 right-0 p-6 h-[100%] overflow-scroll">
        <Title theme="secondary" size="4xl" className="mr-2 font-bold min-w-fit">
          {plan.title}
        </Title>
        <Text theme="secondary" size="2xl" className="p-2 border-2 border-primary rounded-md mx-0 my-4">
          {markerMemo}
        </Text>
        <div className="gird border-2 border-primary rounded-md ">
          <ul className="p-5">
            {detailPlans.map((plan, index, arr) => {
              const checkDay = () => {
                if (index === 0 || arr[index - 1].plan_date !== arr[index].plan_date) {
                  detailDay = 0;
                  return true;
                }
                return false;
              };

              return (
                <li key={plan.id} className="pb-5">
                  {checkDay() && (
                    <Text theme="secondary" size="2xl" className="mx-0 my-2.5">
                      {(day += 1)}일차 {plan.plan_date}
                    </Text>
                  )}
                  <div className="flex gap-5 items-center ">
                    <Text
                      theme="secondary"
                      size="lg"
                      className="bg-primary text-white w-[30px] h-[30px] flex flex-wrap justify-center items-center rounded-[100%]"
                    >
                      {(detailDay += 1)}
                    </Text>
                    <div className="flex-col bg-white shadow-lg rounded-xl p-4 w-[calc(100%-50px)]">
                      <Text theme="secondary" size="xl">
                        {plan.plan_memo} {plan.plan_time}
                      </Text>
                      <Text theme="secondary" size="md">
                        {plan.place}
                      </Text>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
