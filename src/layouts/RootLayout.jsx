import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <Loader />;
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
