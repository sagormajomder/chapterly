import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import Container from '../components/Container';
import { useAuth } from '../contexts/AuthContext';
import { useSecureAxios } from '../hooks/useSecureAxios';
import ErrorPage from './ErrorPage';

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const books = useLoaderData().data;
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();

  function handleAddComment(e) {
    e.preventDefault();

    const newComment = {
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      comment,
      bookID: book?._id,
      created_at: new Date(),
    };

    axiosSecure.post('/add-comment', newComment).then(result => {
      console.log(result.data);

      if (result.data.insertedId) {
        toast.success('You post a comment');

        // Clear Info
        setComment('');

        // Get data immediately
        axiosSecure.get(`/comments/${book?._id}`).then(result => {
          setCommentList(result.data);
        });
      } else {
        toast.error('Some error occured!');
      }
    });
  }

  useEffect(
    function () {
      axiosSecure.get(`/comments/${book?._id}`).then(result => {
        setCommentList(result.data);
      });
    },
    [axiosSecure, book]
  );

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
        <div className='divider'></div>
        {/* Add Comments */}
        <div>
          <form className='flex flex-col gap-2' onSubmit={handleAddComment}>
            <textarea
              className='textarea w-full'
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder='Add your comments'></textarea>
            <button className='btn btn-primary self-end'>Post</button>
          </form>
        </div>
        {/* Comments List */}
        <div>
          <h3 className='heading-tertiary'>Comments</h3>
          <div className='space-y-2'>
            {commentList.map(com => (
              <Comment key={com._id} com={com} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Comment({ com }) {
  const { userName, userPhoto, comment, created_at } = com;

  return (
    <div className='p-5 flex flex-col sm:flex-row gap-4 border border-gray-300 dark:border-gray-700 rounded-md items-center'>
      <div className='flex basis-[90%] gap-4 self-start'>
        <img
          className='h-16 w-16 rounded-full object-cover basis-fit self-start'
          src={userPhoto}
          alt={userName}
        />
        <div className='basis-fit'>
          <p className='text-xl text-red-300'>{userName}</p>
          <p>{comment}</p>
        </div>
      </div>
      <p className='text-xs self-end ml-auto basis-[12%]'>
        - {format(created_at, 'Pp')}
      </p>
    </div>
  );
}
