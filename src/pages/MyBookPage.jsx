import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';
import emptySVG from '../assets/empty.svg';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';
import { useSecureAxios } from '../hooks/useSecureAxios';
import Loader from './../components/Loader';

export default function MyBookPage() {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const [mybooks, setMyBooks] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(
    function () {
      axiosSecure.get(`/my-books?email=${user?.email}`).then(result => {
        setMyBooks(result.data);
        setLoader(false);
      });
    },
    [axiosSecure, user]
  );

  function handleDeleteBookById(id) {
    axiosSecure.delete(`/delete-book/${id}`).then(result => {
      if (result.data.acknowledged) {
        toast.success('Book is successfully deleted!');
        setMyBooks(prev => prev.filter(book => book._id !== id));
      } else {
        toast.error('Some error occured!');
      }
    });
  }

  if (loader) return <Loader />;

  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='My Books'
          desc='Your personal library—view, manage, and update your added books.
'
        />

        {/* Table */}
        {mybooks.length === 0 ? (
          <div className='flex flex-col items-center justify-center gap-10'>
            <img
              className='max-w-3xs'
              src={emptySVG}
              alt='Empty Illustration'
            />
            <p className='text-xl text-center font-semibold max-w-3xl'>
              You haven’t added any books yet. Start building your collection
              now.
            </p>
          </div>
        ) : (
          // <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
          //   <table className='table'>
          //     {/* head */}
          //     <thead>
          //       <tr>
          //         <th></th>
          //         <th>Book</th>
          //         <th>Author</th>
          //         <th>Rating</th>
          //         <th>Genre</th>
          //         <th></th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       {mybooks.map((book, i) => (
          //         <Row
          //           key={book._id}
          //           book={book}
          //           index={i + 1}
          //           onAddMyBooks={setMyBooks}
          //         />
          //       ))}
          //     </tbody>
          //   </table>
          // </div>

          <div className='rounded-box border  border-gray-300 dark:border-gray-700 md:border-base-content/5 dark:md:border-base-content/5 bg-base-100'>
            {/* Desktop */}
            <div className='hidden md:block overflow-x-auto'>
              <table className='table'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Rating</th>
                    <th>Genre</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {mybooks.map((book, i) => (
                    <Row
                      key={book._id}
                      book={book}
                      index={i + 1}
                      // onAddMyBooks={setMyBooks}
                      onDeleteBookById={handleDeleteBookById}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: */}
            <div className='md:hidden p-4 space-y-3'>
              {mybooks.map((book, i) => (
                <div
                  key={book._id}
                  className='border dark:border-gray-700 border-gray-300 rounded-md p-4 flex flex-col sm:flex-row justify-between items-start gap-3'>
                  <div>
                    <h4 className='font-semibold'>
                      {i + 1}. {book.title}
                    </h4>
                    <p className='text-sm text-muted'>{book.author}</p>
                    <div className='flex items-center gap-2 mt-2'>
                      <span className='text-yellow-300'>
                        <FaStar />
                      </span>
                      <span className='text-xs bg-primary text-white px-2 py-1 rounded-full'>
                        {book.rating}
                      </span>
                    </div>
                    <p className='mt-2 text-sm text-gray-600'>{book.genre}</p>
                  </div>

                  <div className='flex gap-2 mt-3 sm:mt-0'>
                    <Link
                      to={`/update-book/${book._id}`}
                      className='btn btn-primary btn-sm'>
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteBookById(book._id)}
                      className='btn btn-primary btn-sm'>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

function Row({ book, index, onDeleteBookById }) {
  const { _id, title, author, genre, rating } = book;

  // const axiosSecure = useSecureAxios();
  // function handleDeleteBook() {
  //   axiosSecure.delete(`/delete-book/${_id}`).then(result => {
  //     if (result.data.acknowledged) {
  //       toast.success('Book is successfully deleted!');
  //       onAddMyBooks(prevB => prevB.filter(book => book._id !== _id));
  //     } else {
  //       toast.error('Some error occured!');
  //     }
  //   });
  // }

  return (
    <tr>
      <th>{index}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        <p className='text-xs bg-primary text-white  font-medium px-2 py-1 rounded-full max-w-fit mb-2 inline-flex gap-0.5'>
          <span className='text-yellow-300'>
            <FaStar />
          </span>{' '}
          {rating}
        </p>
      </td>
      <td>{genre}</td>
      <td className='flex gap-2 flex-col sm:flex-row'>
        <Link to={`/update-book/${_id}`} className='btn btn-primary'>
          Update
        </Link>
        <button
          onClick={() => onDeleteBookById(_id)}
          className='btn btn-primary'>
          Delete
        </button>
      </td>
    </tr>
  );
}
