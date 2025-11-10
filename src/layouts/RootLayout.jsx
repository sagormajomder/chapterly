import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh text-secondary'>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}
