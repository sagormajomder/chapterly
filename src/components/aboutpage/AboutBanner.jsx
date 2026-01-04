import bookshelfData from '../../assets/bookshelf.jpg';
import Container from '../Container';

const AboutBanner = () => {
  return (
    <section className='bg-[#FFF5F5] py-20 px-4 md:px-8 font-inter'>
      <Container style='flex flex-col items-center text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#161619] leading-tight mb-6'>
          Redefining How You <br className='hidden md:block' />
          <span className='relative inline-block'>
            <span className='relative z-10 text-[#FF6B6B]'>Experience</span>
            <svg
              className='absolute -bottom-2 left-0 w-full h-3 -z-0 text-[#FF6B6B] opacity-30'
              viewBox='0 0 100 10'
              preserveAspectRatio='none'>
              <path
                d='M0 5 Q 50 10 100 5'
                stroke='currentColor'
                strokeWidth='8'
                fill='none'
              />
            </svg>
          </span>{' '}
          Stories
        </h2>
        <p className='max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed mb-12'>
          Chapterly isn't just a library; it's a sanctuary for your literary
          life. We connect readers, curate collections, and bring new meaning to
          every page you turn.
        </p>
        <div className='w-full rounded-2xl overflow-hidden shadow-2xl'>
          <img
            src={bookshelfData}
            alt='Library bookshelf with warm lighting'
            className='w-full h-auto object-cover'
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutBanner;
