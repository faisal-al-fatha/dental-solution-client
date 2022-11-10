import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AddServise from '../Pages/AddAService/AddServise';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyReviews from '../Pages/MyReviews/MyReviews';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../Pages/SignUp/SignUp';
import AllServices from '../Shared/Services/AllServices';
import PrivateRoute from './PriveRoute';

const router  = createBrowserRouter([
    {path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/addservice',
            element: <PrivateRoute><AddServise></AddServise></PrivateRoute>
        },
        {
            path: '/services',
            element: <AllServices></AllServices>
        },
        {
            path: '/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path: '/myreviews',
            element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        },
    ]
  }
  ])

  export default router;