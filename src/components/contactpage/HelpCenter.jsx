import { Link } from 'react-router';

const HelpCenter = () => {
  return (
    <div className='bg-blue-50/50 p-6 rounded-xl border border-blue-100 mt-6'>
      <h3 className='font-bold text-gray-900 mb-2'>Looking for Help Center?</h3>
      <p className='text-gray-600 text-sm mb-4'>
        You might find your answer instantly in our frequently asked questions.
      </p>
      <Link
        to='/help-center'
        className='text-[#ff4d5a] text-sm font-medium hover:text-[#ff3342] flex items-center gap-1 transition-colors'>
        Visit Help Center
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-3.5'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </Link>
    </div>
  );
};

export default HelpCenter;
