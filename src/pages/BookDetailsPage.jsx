import { FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import Container from '../components/Container';

export default function BookDetailsPage() {
  const { id } = useParams();
  const books = useLoaderData().data;

  const { title, author, genre, rating, summary, coverImage, userEmail } =
    books.find(book => book._id === id);

  return (
    <section className='py-14'>
      <Container>
        <div className='flex md:gap-8 gap-12  justify-center md:flex-row flex-col'>
          <figure className='relative basis-[35%]'>
            <img
              className='object-cover h-100 md:h-auto'
              src={coverImage}
              alt={title}
            />
            <p className='text-lg bg-primary text-white  font-medium px-4 py-1 rounded-full max-w-fit mb-2 inline-flex items-center gap-2 absolute top-4 left-5'>
              <span className='text-yellow-300 -mt-0.5'>
                <FaStar />
              </span>
              {rating}
            </p>
          </figure>
          <div className='basis-1/2'>
            <h2 className='heading-secondary'>{title}</h2>
            <p className=''>
              <strong>By (Author)</strong>: {author}
            </p>
            <p className='mb-4'>
              <strong>Added by:</strong> {userEmail}
            </p>
            <p className='text-lg mb-3'>
              <strong>Summary: </strong>
              {summary}
            </p>

            <div className='flex gap-2'>
              {genre.split('/').map((cat, i) => (
                <p
                  key={i}
                  className=' bg-accent px-4 py-1 rounded-full max-w-fit mb-2'>
                  {cat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
