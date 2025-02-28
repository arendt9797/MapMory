import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreatePlanPage from '../pages/CreatePlanPage';
import DetailPlanPage from '../pages/DetailPlanPage';
import MyPlanPage from '../pages/MyPlanPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Layout from '../components/layouts/Layout';
import { CREATEPLAN, DETAILPLAN, MYPLAN, SIGNIN, SIGNUP } from '../constants/pagePaths';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: `${DETAILPLAN}/:id`, element: <DetailPlanPage /> },
      { path: MYPLAN, element: <MyPlanPage /> },
      { path: SIGNUP, element: <SignUpPage /> },
      { path: SIGNIN, element: <SignInPage /> }
    ]
  },
  { path: CREATEPLAN, element: <CreatePlanPage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
