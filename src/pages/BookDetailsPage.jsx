import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import Container from '../components/Container';
import { useSecureAxios } from '../hooks/useSecureAxios';
import ErrorPage from './ErrorPage';

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const books = useLoaderData().data;
  const axiosSecure = useSecureAxios();

  useEffect(
    function () {
      axiosSecure.get(`/book-details/${id}`).then(result => {
        setBook(result.data);
      });
    },
    [axiosSecure, id]
  );

  const isHas = books.some(book => book._id === id);

  if (!isHas) return <ErrorPage />;

  return (
    <section className='py-14'>
      <Container>
        <div className='flex md:gap-8 gap-12  justify-center md:flex-row flex-col'>
          <figure className='relative xl:basis-[22%] basis-[35%] lg:basis-[30%]'>
            <img
              className='object-cover h-100 '
              src={book?.coverImage}
              alt={book?.title}
            />
            <p className='text-lg bg-primary text-white  font-medium px-4 py-1 rounded-full max-w-fit mb-2 inline-flex items-center gap-2 absolute top-4 left-5'>
              <span className='text-yellow-300 -mt-0.5'>
                <FaStar />
              </span>
              {book?.rating}
            </p>
          </figure>
          <div className='basis-1/2'>
            <h2 className='heading-secondary'>{book?.title}</h2>
            <p className=''>
              <strong>By (Author)</strong>: {book?.author}
            </p>
            <p className='mb-4'>
              <strong>Added by:</strong> {book?.userEmail}
            </p>
            <p className='text-lg mb-3'>
              <strong>Summary: </strong>
              {book?.summary}
            </p>

            <div className='flex gap-2'>
              {book?.genre.split('/').map((cat, i) => (
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
