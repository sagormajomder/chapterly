import { FaHeart, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import Container from '../Container';

const CoreValues = () => {
  return (
    <section className='py-20 bg-white'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#161619] mb-4'>
            Our Core Values
          </h2>
          <p className='text-gray-600 text-lg'>
            The principles that guide every feature we build.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Card 1: Passion for Stories */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 rounded-2xl bg-[#FFE4E6] flex items-center justify-center mb-6 text-[#F43F5E]'>
              <FaHeart className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold text-[#161619] mb-4'>
              Passion for Stories
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              We don't just sell books; we celebrate them. Every feature is
              designed with the love of reading at its core, respecting the art
              of storytelling.
            </p>
          </div>

          {/* Card 2: Community First */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 rounded-2xl bg-[#CCFBF1] flex items-center justify-center mb-6 text-[#14B8A6]'>
              <FaUserFriends className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold text-[#161619] mb-4'>
              Community First
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Reading is personal, but it thrives on connection. We build spaces
              for readers to share insights, reviews, and recommendations
              safely.
            </p>
          </div>

          {/* Card 3: Curiosity & Discovery */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-6 text-[#9333EA]'>
              <FaLightbulb className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold text-[#161619] mb-4'>
              Curiosity & Discovery
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              We believe there is always another great book waiting to be found.
              Our algorithms are tuned to help you explore outside your comfort
              zone.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
