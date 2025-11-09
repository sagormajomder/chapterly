import { Link, NavLink } from 'react-router';
import Container from './Container';

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-books'>All Books</NavLink>
      </li>
      <li>
        <NavLink to='/add-book'>Add Book</NavLink>
      </li>
      <li>
        <NavLink to='/my-books'>My Books</NavLink>
      </li>
    </>
  );
  return (
    <header>
      <Container>
        <nav className='navbar'>
          {/* Navbar Start */}
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex='-1'
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                {links}
              </ul>
            </div>
            <a className='btn btn-ghost text-xl'>daisyUI</a>
          </div>
          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          {/* Navbar End */}
          <div className='navbar-end'>
            <Link to='/auth/register' className='btn'>
              Register
            </Link>
            <Link to='/auth/login' className='btn'>
              Login
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
