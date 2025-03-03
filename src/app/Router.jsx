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
import TestPage from '../pages/TestPage';

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
          { path: CREATEPLAN, element: <CreatePlanPage /> },
          { path: `${DETAILPLAN}/:id`, element: <DetailPlanPage /> },
          { path: MYPLAN, element: <MyPlanPage /> }
        ]
      }
    ]
  },
  { path: SIGNUP, element: <SignUpPage /> },
  { path: SIGNIN, element: <SignInPage /> },
  { path: 'test', element: <TestPage /> }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
