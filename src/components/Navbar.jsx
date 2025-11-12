import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import Container from './Container';

export default function Navbar() {
  const { signOutUser, user, setUser } = useAuth();

  function handleLogOut() {
    signOutUser()
      .then(() => {
        toast.success('User logout successful');
        setUser(null);
      })
      .catch(error => {
        // console.log(error);
        toast.error(error.message);
      });
  }

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
    <header className='py-1'>
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
                <div className='flex flex-col gap-2   min-[26.875rem]:hidden mt-2'>
                  {!user && (
                    <>
                      <Link
                        to='/auth/register'
                        className='btn btn-outline border border-primary hover:bg-primary hover:text-primary-content'>
                        Register
                      </Link>
                      <Link to='/auth/login' className='btn btn-primary'>
                        Login
                      </Link>
                    </>
                  )}
                  {user && (
                    <div className='flex gap-3 min-[26.875rem]:hidden ml-2'>
                      <div
                        className='tooltip tooltip-primary tooltip-bottom'
                        data-tip={user.displayName}>
                        <img
                          className='rounded-full w-10 h-10 cursor-pointer object-cover'
                          src={user.photoURL}
                          alt={user.displayName}
                        />
                      </div>
                      <button
                        onClick={handleLogOut}
                        className='btn  btn-primary basis-4/6'>
                        LogOut
                      </button>
                    </div>
                  )}
                </div>
              </ul>
            </div>
            <Link to='/' className='text-2xl font-semibold'>
              Chapter<span className='font-bold text-primary'>ly.</span>
            </Link>
          </div>
          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          {/* Navbar End */}
          <div className='navbar-end gap-2 hidden  min-[26.875rem]:flex'>
            {!user && (
              <>
                <Link
                  to='/auth/register'
                  className='btn btn-outline border border-primary hover:bg-primary hover:text-primary-content'>
                  Register
                </Link>
                <Link to='/auth/login' className='btn btn-primary'>
                  Login
                </Link>
              </>
            )}
            {user && (
              <>
                <div
                  className='tooltip tooltip-primary tooltip-bottom'
                  data-tip={user.displayName}>
                  <img
                    className='rounded-full w-10 h-10 cursor-pointer object-cover'
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
                <button onClick={handleLogOut} className='btn  btn-primary'>
                  LogOut
                </button>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
