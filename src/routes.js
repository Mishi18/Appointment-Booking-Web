import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import NotFound from 'src/pages/NotFound';
import AppointmentSlots from './pages/AppointmentSlots';
import AppointmentRequests from './pages/AppointmentRequests';

const routes = (isAuthenticated) => [
  {
    path: '/admin',
    element: isAuthenticated ? <DashboardLayout /> : <Navigate to='/login' />,
    children: [
      { path: 'appointment-slots', element: <AppointmentSlots /> },
      { path: 'appointment-requests', element: <AppointmentRequests /> }
    ]
  },
  
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to='/app/dashboard' /> },
      { path: '*', element: <Navigate to='/404' /> }
    ]
  }
];

export default routes;
