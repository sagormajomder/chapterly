import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';
import { useSecureAxios } from '../hooks/useSecureAxios';

export default function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();

  const navigate = useNavigate();

  function handleAddBook(e) {
    e.preventDefault();

    const newBook = {
      title,
      author,
      genre,
      rating,
      coverImage: image,
      summary,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };

    // console.log(newBook);

    axiosSecure.post('/add-book', newBook).then(result => {
      // console.log(result.data);

      if (result.data.insertedId) {
        toast.success('The Book is successfully added!');

        // Clear Info
        setTitle('');
        setAuthor('');
        setGenre('');
        setRating(0);
        setImage('');
        setSummary('');

        navigate('/my-books');
      } else {
        toast.error('Some error occured!');
      }
    });
  }
  return (
    <section className='py-14'>
      <Container>
        <SectionTitle
          title='Add Your Book'
          desc='Share your favorite reads—add books to your personal library now.
'
        />
        <div className='flex items-center justify-center w-full h-full'>
          <form
            className='card-body shadow-xl dark:shadow-none dark:border dark:border-gray-700 rounded-xl  max-w-lg'
            onSubmit={handleAddBook}>
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
                value={title}
                onChange={e => setTitle(e.target.value)}
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
                value={author}
                onChange={e => setAuthor(e.target.value)}
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
                value={genre}
                onChange={e => setGenre(e.target.value)}
                required
              />
              <p className='mt-1 text-gray-500 text-xs'>
                Add multiple genres using "/" separator. Example: "Fantasy /
                Adventure / Mystery"
              </p>

              {/* Rating */}
              <label htmlFor='rating' className='label'>
                Rating
              </label>
              <input
                id='rating'
                type='number'
                className='input w-full'
                placeholder='Rating'
                value={rating}
                step={0.1}
                min={0}
                onChange={e => setRating(e.target.value)}
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
                value={image}
                onChange={e => setImage(e.target.value)}
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
                value={summary}
                onChange={e => setSummary(e.target.value)}
                required></textarea>

              <button type='submit' className='btn btn-primary mt-4'>
                Add Book
              </button>
            </fieldset>
          </form>
        </div>
      </Container>
    </section>
  );
}
