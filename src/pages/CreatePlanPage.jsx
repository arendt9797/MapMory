import NaverMap from '../components/commons/NaverMap';
import CreatePlanCreated from '../components/features/CreatePlanCreated';
import CreatePlanCreation from '../components/features/CreatePlanCreation';

const CreatePlanPage = () => {
  return (
    <>
      <NaverMap />
      <div className='z-10'>
        <CreatePlanCreation />
        <CreatePlanCreated />
      </div>
    </>
  );
};

export default CreatePlanPage;
