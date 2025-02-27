import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreatePlanPage from '../pages/CreatePlanPage';
import DetailPlanPage from '../pages/DetailPlanPage';
import MyPlanPage from '../pages/MyPlanPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Layout from '../components/layouts/Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/createPlan', element: <CreatePlanPage /> },
      { path: '/detailPlan/:id', element: <DetailPlanPage /> },
      { path: '/myPlan', element: <MyPlanPage /> },
      { path: '/signUp', element: <SignUpPage /> },
      { path: '/signIn', element: <SignInPage /> }
    ]
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
