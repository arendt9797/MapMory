import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const isAuthenticated = false;
  return (
    <>
      <header className="border-b-4 border-primary h-[60px] p-4 flex ">
        <nav className=" flex justify-between w-full">
          <Link to="/" className="flex items-center gap-4">
            <img src="/header-logo.png" className="w-[30px]" />
            <p className="text-4xl font-semibold text-primary">
              <span className="text-primaryHover">M</span>AP<span className="text-primaryHover">M</span>ORY
            </p>
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/createPlan" className="text-secondary hover:text-primaryHover">
                새 여행 추가
              </Link>
              <Link to="/myPlan" className="text-secondary  hover:text-primaryHover">
                내 여행 일정
              </Link>

              <button className="bg-secondary p-2 px-4 rounded-3xl text-white  hover:bg-secondaryHover">
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/signIn" className="bg-secondary  p-2 px-4  rounded-3xl text-white hover:bg-secondaryHover">
                로그인
              </Link>
              {/* <Link to="/signUp" className="bg-primary  p-2 px-4  rounded-3xl text-white hover:bg-primaryHover">
                회원가입
              </Link> */}
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
