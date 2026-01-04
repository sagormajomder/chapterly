// Make sure react-icons is installed. If not, I'll need to use SVGs or ask to install.
// Assuming react-icons or similar might be available given the size of node_modules usually.
// If it fails, I'll switch to SVG icons. Given the previous file check, I didn't see package.json.
// Safest bet is to use SVG icons directly to avoid dependency issues if I'm not sure.
// Actually, I'll use SVGs for reliability.

import { Link } from 'react-router';

const ContactInfo = () => {
  return (
    <div className='bg-gray-50/50 p-6 md:p-8 rounded-xl border border-gray-100 h-full'>
      <h2 className='text-xl font-bold text-gray-900 mb-6'>
        Contact Information
      </h2>

      <div className='space-y-6'>
        <div className='flex items-start gap-4'>
          <div className='bg-red-50 p-2.5 rounded-full text-red-500 shrink-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-5'>
              <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
              <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
            </svg>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 text-sm'>Email</h3>
            <p className='text-gray-600 text-sm mt-0.5'>
              support@chapterly.com
            </p>
            <p className='text-gray-600 text-sm'>partnerships@chapterly.com</p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='bg-red-50 p-2.5 rounded-full text-red-500 shrink-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-5'>
              <path
                fillRule='evenodd'
                d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 text-sm'>Office</h3>
            <p className='text-gray-600 text-sm mt-0.5'>
              123 Fiction Avenue, Suite 400
            </p>
            <p className='text-gray-600 text-sm'>Storyville, NY 10012</p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <div className='bg-red-50 p-2.5 rounded-full text-red-500 shrink-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-5'>
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 text-sm'>
              Support Hours
            </h3>
            <p className='text-gray-600 text-sm mt-0.5'>
              Mon - Fri: 9am - 6pm EST
            </p>
            <p className='text-gray-600 text-sm'>Weekend: 10am - 2pm EST</p>
          </div>
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <h3 className='font-semibold text-gray-900 text-sm mb-4'>
          Follow our story
        </h3>
        <div className='flex gap-4'>
          {/* Twitter/X Icon */}
          <Link
            to='https://x.com'
            className='text-gray-400 hover:text-gray-600 transition-colors'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='h-5 w-5 fill-current'>
              <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z'></path>
            </svg>
          </Link>
          {/* Facebook Icon */}
          <Link
            to='https://facebook.com'
            className='text-gray-400 hover:text-gray-600 transition-colors'>
            <svg fill='currentColor' viewBox='0 0 24 24' className='h-5 w-5'>
              <path
                fillRule='evenodd'
                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          {/* YouTube Icon */}
          <Link
            to='https://youtube.com'
            className='text-gray-400 hover:text-gray-600 transition-colors'>
            <svg fill='currentColor' viewBox='0 0 24 24' className='h-5 w-5'>
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
