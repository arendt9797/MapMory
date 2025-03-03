import { Link, Outlet } from 'react-router-dom';
import { AuthHeader } from './AuthHeader';
import GuestHeader from './GuestHeader';
import { HOME } from '../../constants/pagePaths';
import { useAuthStore } from '../../stores/authStore';

const Layout = () => {
  const userInfo = useAuthStore((state) => state.userInfo.isLogin);

  return (
    <>
      <header className="border-b-4 border-primary h-[60px] p-4 flex ">
        <nav className=" flex justify-between w-full">
          <Link to={HOME} className="flex items-center gap-4">
            <img src="/header-logo.png" className="w-[30px]" />
            <p className="text-4xl font-semibold text-primary">
              <span className="text-primaryHover">M</span>AP<span className="text-primaryHover">M</span>ORY
            </p>
          </Link>
          {userInfo ? <AuthHeader /> : <GuestHeader />}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
