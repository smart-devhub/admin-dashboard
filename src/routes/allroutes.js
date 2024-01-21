import  { lazy } from 'react';

const Login = lazy(() => import('../pages/auth/login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Products = lazy(() => import('../pages/product/product'));
const AllUsers = lazy(() => import('../pages/users/alluser'));
const MapView = lazy(() => import('../pages/mapview'));
const Calender = lazy(() => import('../pages/calender'));
const Profile = lazy(() => import('../pages/profile'));


import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout'


export const routesConfig = [
    {
      path: '/auth/login',
      component: Login,
      layout: AuthLayout,
    },
    {
      path: '/auth/register',
      component: Register,
      layout: AuthLayout,
    },
    {
      path: '/',
      component: Dashboard,
      layout: DashboardLayout,
    },
    {
      path: '/products',
      component: Products,
      layout: DashboardLayout,
    },
    {
      path: '/users',
      component: AllUsers,
      layout: DashboardLayout,
    },
    {
      path: '/mapview',
      component: MapView,
      layout: DashboardLayout,
    },
    {
      path: '/calender',
      component: Calender,
      layout: DashboardLayout,
    },
    {
      path: '/profile',
      component: Profile,
      layout: DashboardLayout,
    },
  ];