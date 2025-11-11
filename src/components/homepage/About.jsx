import { PiHeartFill } from 'react-icons/pi';
export default function About() {
  return (
    <section className='py-14 bg-[url(./assets/library.jpg)] bg-fixed relative sm:h-125 h-150'>
      <div className='absolute inset-0 bg-accent/80  flex flex-col items-center justify-center gap-2 bg-cover'>
        <div className='flex flex-col items-center justify-center gap-2 max-w-5xl mx-auto text-primary-content px-4 py-10'>
          <span className='text-5xl text-primary'>
            <PiHeartFill />
          </span>
          <h2 className='font-semibold mb-2 text-3xl'>
            About Chapter<span className='font-bold text-primary'>ly.</span>
          </h2>
          <p className='text-center text-xl font-semibold'>
            Chapterly is a user-friendly digital library platform where readers
            can explore, add, update, and manage books with ease. Authenticated
            users enjoy full control over their personal collections, making
            Chapterly the perfect space to organize stories, discover new
            titles, and curate a library that reflects their unique reading
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
