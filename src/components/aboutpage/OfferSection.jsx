import { BiAnalyse, BiCustomize, BiLibrary } from 'react-icons/bi';
import coffeeImg from '../../assets/coffee_book.png';
import ipadImg from '../../assets/ipad_mockup.png';
import shelfImg from '../../assets/shelf.png';
import Container from '../Container';

const OfferSection = () => {
  return (
    <section className='py-20 bg-white'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          {/* Left Content */}
          <div className='w-full lg:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#161619] mb-12'>
              What We Offer
            </h2>

            <div className='space-y-12'>
              {/* Feature 1 */}
              <div className='flex gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white shadow-lg shadow-red-200'>
                    <BiLibrary className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-[#161619] mb-2'>
                    Smart Library Management
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Organize your physical and digital books in one beautiful,
                    unified dashboard.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='flex gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white shadow-lg shadow-red-200'>
                    <BiAnalyse className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-[#161619] mb-2'>
                    Reading Insights
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Track your reading habits, set yearly goals, and visualize
                    your literary journey.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='flex gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white shadow-lg shadow-red-200'>
                    <BiCustomize className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-[#161619] mb-2'>
                    Personalized Recommendations
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Get suggestions based on what you actually liked, not just
                    what's popular.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images - Masonry/Grid Layout */}
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-2 gap-4 h-[600px]'>
              {/* Large Left Image (Tablet) */}
              <div className='col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-xl h-full'>
                <img
                  src={ipadImg}
                  alt='Chapterly App on Tablet'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>

              {/* Top Right (Shelf) */}
              <div className='col-span-1 h-[290px] rounded-3xl overflow-hidden shadow-xl'>
                <img
                  src={shelfImg}
                  alt='Organized Bookshelf'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>

              {/* Bottom Right (Coffee) */}
              <div className='col-span-1 h-[290px] rounded-3xl overflow-hidden shadow-xl'>
                <img
                  src={coffeeImg}
                  alt='Cozy Reading Moment'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;
