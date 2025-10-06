import { NavLink } from 'react-router';

export default function Header() {
  const links = (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/listedBooks'>Listed Books</NavLink>
      <NavLink to='pagesToRead'>Pages to Read</NavLink>
      <a
        href='#'
        className='btn bg-primary text-white text-sm max-[25rem]:inline-flex hidden'>
        Sign In
      </a>
      <a
        href='#'
        className='btn bg-secondary text-white text-sm max-[25rem]:inline-flex hidden'>
        Sign Up
      </a>
    </>
  );

  return (
    <header className='shadow-sm leading-none'>
      <nav className='navbar bg-base-100 max-w-[80rem] mx-auto px-4'>
        {/* Nav Start */}
        <div className='navbar-start'>
          <div className='dropdown'>
            {/* Hambumger */}
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  gap-3'>
              {links}
            </ul>
          </div>
          <a href='#' className='text-2xl font-bold '>
            Chapterly
          </a>
        </div>
        {/* Nav Center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-4 text-base items-center'>
            {links}
          </ul>
        </div>
        {/* Nav End */}
        <div className='navbar-end gap-2'>
          <a
            href='#'
            className='btn bg-primary text-white text-sm max-[25rem]:hidden'>
            Sign In
          </a>
          <a
            href='#'
            className='btn bg-secondary text-white text-sm max-[25rem]:hidden'>
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
