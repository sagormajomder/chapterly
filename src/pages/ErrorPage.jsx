import { Link } from 'react-router';
import ErrorImage from '../assets/404.svg';
export default function ErrorPage() {
  return (
    <section className='min-h-[80dvh] flex flex-col gap-8 items-center justify-center h-full px-4'>
      <img className='max-w-70' src={ErrorImage} alt='Error 404 image' />
      <div className='text-center space-y-4'>
        <h2 className='heading-secondary'>Error 404: Page not found!</h2>
        <p className='text-xl'>
          We've looked everywhere but couldn't find the page you are looking
          for.
        </p>
      </div>
      <Link to='/' className='btn btn-primary'>
        Go to Home Page
      </Link>
    </section>
  );
}
