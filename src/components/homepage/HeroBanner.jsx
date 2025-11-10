import { motion } from 'motion/react';
import { Link } from 'react-router';
import heroImage from './../../assets/hero.png';
export default function HeroBanner() {
  return (
    <section className='bg-red-50 sm:pt-20 pt-14'>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center space-y-8 px-4 md:px-0 lg:max-w-3xl sm:max-w-xl  mx-auto'>
        <h1 className='font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-14 sm:leading-11'>
          The Best <span className='text-primary'>Books</span> for Every Chapter
          of Your Life, Bringing New Meaning to Your
          <span className='text-primary'> Journey</span>
        </h1>
        <p className='lg:text-2xl text-lg'>
          Explore thousands of books ready to accompany your every step, and
          find the perfect story for you.
        </p>
        <div className='flex justify-center gap-3 -mt-4'>
          <Link className='btn  btn-primary' to='/all-books'>
            Explore Books
          </Link>
          <Link
            className='btn btn-outline border border-primary hover:bg-primary hover:text-primary-content'
            to='/add-book'>
            Add Book
          </Link>
        </div>
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          src={heroImage}
          alt='Hero Image'
        />
      </motion.div>
    </section>
  );
}
