import { motion } from 'motion/react';
import Container from '../Container';
import SectionTitle from './../SectionTitle';

export default function BookOfTheWeek() {
  return (
    <section className='pb-14'>
      <Container>
        <SectionTitle
          title='Book of the Week'
          desc='One book, one spotlight — explore this week’s featured read.'
        />
        <div className='flex md:flex-row flex-col gap-10  items-start max-w-4xl mx-auto bg-red-50 md:bg-transparent p-4 md:p-0 min-[30rem]:p-10  rounded-md overflow-hidden'>
          <motion.figure
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='md:basis-1/2 overflow-hidden'>
            <img
              className='object-cover md:max-h-auto max-h-125 rounded-md'
              src='https://i.ibb.co.com/x87wZTCB/Gone-Girl-Gillian-Flynn.webp'
              alt='Gone Girl book image'
            />
          </motion.figure>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='basis-1/2'>
            <h3 className='heading-tertiary'>
              Gone Girl{' '}
              <span className='text-base text-gray-600 dark:text-gray-400'>
                by Gillian Flynn
              </span>
            </h3>
            <p className='text-xs bg-accent px-2 py-1 rounded-full max-w-fit mb-2'>
              {'Thriller / Mystery'.toUpperCase()}
            </p>
            <p className='mb-4'>
              <strong>Gone Girl </strong>by Gillian Flynn is a gripping
              psychological thriller that explores the dark complexities of
              marriage, media, and manipulation. When Amy Dunne mysteriously
              disappears on her fifth wedding anniversary, suspicion quickly
              falls on her husband, Nick. As the investigation unfolds, secrets
              emerge and the narrative twists through dual perspectives,
              revealing a chilling portrait of deceit and obsession.
            </p>
            <p>
              Flynn’s razor-sharp writing and unreliable narrators keep readers
              questioning every motive and truth. “Gone Girl” is a masterclass
              in suspense, blending domestic drama with psychological intrigue,
              making it a standout choice for Book of the Week. Prepare for a
              shocking, unforgettable ride.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
