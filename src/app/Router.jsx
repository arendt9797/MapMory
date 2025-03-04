import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreatePlanPage from '../pages/CreatePlanPage';
import DetailPlanPage from '../pages/DetailPlanPage';
import MyPlanPage from '../pages/MyPlanPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Layout from '../components/layouts/Layout';
import { CREATEPLAN, DETAILPLAN, HOME, MYPLAN, SIGNIN, SIGNUP } from '../constants/pagePaths';
import ProtectedRouter from './ProtectedRouter';

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '',
        element: <ProtectedRouter />,
        children: [
          { path: `${DETAILPLAN}/:id`, element: <DetailPlanPage /> },
          { path: MYPLAN, element: <MyPlanPage /> }
        ]
      }
    ]
  },
  {
    path: '',
    element: <ProtectedRouter />,
    children: [{ path: CREATEPLAN, element: <CreatePlanPage /> }]
  },
  { path: SIGNUP, element: <SignUpPage /> },
  { path: SIGNIN, element: <SignInPage /> }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
