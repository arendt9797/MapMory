import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { SIGNIN } from '../constants/pagePaths';

const ProtectedRouter = () => {
  const { pathname } = useLocation();
  const isLogin = useAuthStore((state) => state.userInfo.isLogin);
  if (!isLogin) {
    return <Navigate to={SIGNIN} replace state={{ redirectionFrom: pathname }} />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
