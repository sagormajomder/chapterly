import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';
import emptySVG from '../assets/empty.svg';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';
import { useSecureAxios } from '../hooks/useSecureAxios';

export default function MyBookPage() {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const [mybooks, setMyBooks] = useState([]);

  useEffect(
    function () {
      axiosSecure.get(`/my-books?email=${user?.email}`).then(result => {
        setMyBooks(result.data);
      });
    },
    [axiosSecure, user]
  );

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
          <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
            <table className='table'>
              {/* head */}
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
                    onAddMyBooks={setMyBooks}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  );
}

function Row({ book, index, onAddMyBooks }) {
  const { _id, title, author, genre, rating } = book;

  const axiosSecure = useSecureAxios();
  function handleDeleteBook() {
    axiosSecure.delete(`/delete-book/${_id}`).then(result => {
      if (result.data.acknowledged) {
        toast.success('Book is successfully deleted!');
        onAddMyBooks(prevB => prevB.filter(book => book._id !== _id));
      } else {
        toast.error('Some error occured!');
      }
    });
  }

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
        <button onClick={handleDeleteBook} className='btn btn-primary'>
          Delete
        </button>
      </td>
    </tr>
  );
}
