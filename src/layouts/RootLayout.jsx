import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main className='max-w-[80rem] mx-auto px-4'>{children}</main>;
}
