import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className='footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-20 px-4'>
      <nav className='grid grid-flow-col gap-4 '>
        <Link className='link link-hover'>About us</Link>
        <Link className='link link-hover'>Contact</Link>
        <Link className='link link-hover'>Privacy Policy</Link>
        <Link className='link link-hover'>Terms & Conditions</Link>
      </nav>
      <nav>
        <div className='grid grid-flow-col gap-4 text-3xl items-center '>
          <Link to='https://x.com' className='text-2xl'>
            <BsTwitterX />
          </Link>
          <Link to='https://youtube.com' className=''>
            <FaYoutube />
          </Link>
          <Link to='https://facebook.com' className='text-2xl'>
            <FaFacebookF />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Chapterly
        </p>
      </aside>
    </footer>
  );
}
