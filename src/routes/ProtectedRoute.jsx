import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loader />;

  if (!user)
    return <Navigate state={location.pathname} to='/auth/login' replace />;

  return children;
}
