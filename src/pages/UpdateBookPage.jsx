import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import forbiddenSVG from '../assets/forbidden.svg';
import Container from '../components/Container';
import Loader from '../components/Loader';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';
import { useSecureAxios } from '../hooks/useSecureAxios';

export default function UpdateBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { user } = useAuth();

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateAuthor, setUpdateAuthor] = useState('');
  const [updateGenre, setUpdateGenre] = useState('');
  const [updateRating, setUpdateRating] = useState('');
  const [updateCoverImage, setUpdateCoverImage] = useState('');
  const [updateSummary, setUpdateSummary] = useState('');

  const [loader, setLoader] = useState(true);

  const axiosSecure = useSecureAxios();

  const navigate = useNavigate();

  function handleUpdateBook(e) {
    e.preventDefault();

    const updatedBook = {
      title: updateTitle,
      author: updateAuthor,
      genre: updateGenre,
      rating: updateRating,
      coverImage: updateCoverImage,
      summary: updateSummary,
    };

    // console.log(updatedBook);

    axiosSecure.patch(`/update-book/${book?._id}`, updatedBook).then(result => {
      // console.log(result);

      if (result.data.acknowledged) {
        toast.success('The Book is successfully updated!');

        // Clear Info
        setUpdateTitle('');
        setUpdateAuthor('');
        setUpdateGenre('');
        setUpdateRating(0);
        setUpdateCoverImage('');
        setUpdateSummary('');

        navigate('/my-books');
      } else {
        toast.error('Some error occured!');
      }
    });
  }

  useEffect(
    function () {
      axiosSecure.get(`/book-details/${id}`).then(result => {
        setBook(result.data);
        setLoader(false);
      });
    },
    [axiosSecure, id]
  );

  useEffect(
    function () {
      if (!book) return;
      setUpdateTitle(book.title ?? '');
      setUpdateAuthor(book.author ?? '');
      setUpdateGenre(book.genre ?? '');
      setUpdateRating(book.rating ?? '');
      setUpdateCoverImage(book.coverImage ?? '');
      setUpdateSummary(book.summary ?? '');
    },
    [book]
  );

  if (loader) return <Loader />;

  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='Update Book'
          desc='Edit book details anytime—keep your library accurate and organized
  '
        />

        {book?.userEmail !== user?.email ? (
          <div className='flex flex-col items-center justify-center gap-10'>
            <img
              className='max-w-3xs'
              src={forbiddenSVG}
              alt='Forbidden Access'
            />
            <p className='text-xl text-center font-semibold max-w-3xl'>
              You don't have permission to update the book
            </p>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full h-full'>
            <form
              className='card-body shadow-xl dark:shadow-none dark:border dark:border-gray-700 rounded-xl  max-w-lg'
              onSubmit={handleUpdateBook}>
              <fieldset className='fieldset'>
                {/* Book Title */}
                <label htmlFor='title' className='label'>
                  Title
                </label>
                <input
                  id='title'
                  type='text'
                  className='input w-full'
                  placeholder='Title'
                  value={updateTitle}
                  onChange={e => setUpdateTitle(e.target.value)}
                  required
                />

                {/* Author */}
                <label htmlFor='author' className='label'>
                  Author
                </label>
                <input
                  id='author'
                  type='text'
                  className='input w-full'
                  placeholder='Author'
                  value={updateAuthor}
                  onChange={e => setUpdateAuthor(e.target.value)}
                  required
                />
                {/* Genre */}
                <label htmlFor='genre' className='label'>
                  Genre
                </label>

                <input
                  id='genre'
                  type='text'
                  className='input w-full'
                  placeholder='Genre'
                  value={updateGenre}
                  onChange={e => setUpdateGenre(e.target.value)}
                  required
                />

                {/* Rating */}
                <label htmlFor='rating' className='label'>
                  Rating
                </label>
                <input
                  id='rating'
                  type='number'
                  className='input w-full'
                  placeholder='Rating'
                  value={updateRating}
                  step={0.1}
                  onChange={e => setUpdateRating(e.target.value)}
                  required
                />

                {/* CoverImage */}
                <label htmlFor='photo' className='label'>
                  Cover Image
                </label>
                <input
                  id='photo'
                  type='text'
                  className='input w-full'
                  placeholder='Cover Image'
                  value={updateCoverImage}
                  onChange={e => setUpdateCoverImage(e.target.value)}
                  required
                />

                {/* Summary */}
                <label htmlFor='summary' className='label'>
                  Summary
                </label>
                <textarea
                  id='summary'
                  className='textarea w-full'
                  placeholder='Summary'
                  value={updateSummary}
                  onChange={e => setUpdateSummary(e.target.value)}
                  required></textarea>

                <button type='submit' className='btn btn-primary mt-4'>
                  Update Book
                </button>
              </fieldset>
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
