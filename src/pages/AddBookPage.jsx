import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';

export default function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const { user } = useAuth();

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
    };

    // console.log(newBook);

    axios.post('http://localhost:3000/add-book', newBook).then(result => {
      console.log(result.data);

      if (result.data.insertedId) {
        toast.success('The Book is successfully added!');

        // Clear Info
        setTitle('');
        setAuthor('');
        setGenre('');
        setRating(0);
        setImage('');
        setSummary('');
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
            className='card-body shadow-md max-w-lg'
            onSubmit={handleAddBook}>
            <fieldset className='fieldset'>
              {/* Book Title */}
              <label htmlFor='userEmail' className='label'>
                User Email
              </label>
              <input
                id='userEmail'
                type='text'
                className='input w-full'
                placeholder='User Email'
                defaultValue={user.email}
                required
                readOnly
              />
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
