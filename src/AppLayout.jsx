import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
