import { useAuth } from '../contexts/AuthContext';

export default function RegistrationPage() {
  const { user } = useAuth();
  return <div>{user}</div>;
}
