import { Link } from 'react-router-dom';
// import { headerLogo } from '/header-logo';
const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-20 h-[calc(100vh - 60px)]">
      <p className="text-5xl text-primaryHover font-semibold ">
        <span className="text-secondary">MAP</span>에 <span className="text-secondary">MEMORY</span>를 더하다!
      </p>
      <img src="/header-logo.png" className="w-[70px]" />
      <p className="text-4xl font-semibold text-primary">
        <span className="text-primaryHover">M</span>AP<span className="text-primaryHover">M</span>ORY
      </p>
      <Link to="/createPlan" className="bg-secondary p-2 px-4 rounded-3xl text-white  hover:bg-secondaryHover">
        계획짜러 가기
      </Link>
    </div>
  );
};

export default HomePage;
