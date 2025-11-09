import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router';
import GoogleLogin from '../components/GoogleLogin';
import { useAuth } from '../contexts/AuthContext';
import Container from './../components/Container';

export default function RegistrationPage() {
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, setIsLoading } = useAuth();

  const navigate = useNavigate();

  function handleUserRegister(e) {
    e.preventDefault();

    // Password validation using single regex
    // (?=.*[a-z]) - at least one lowercase letter
    // (?=.*[A-Z]) - at least one uppercase letter
    // .{6,} - at least 6 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 6 characters and contain both uppercase and lowercase letters'
      );
      return;
    }

    createUser(email, password)
      .then(userCredential => {
        updateUserProfile({ displayName, photoURL })
          .then(() => {
            toast.success('User registration successful.');

            // console.log(userCredential);

            // Clear Values
            setDisplayName('');
            setPhotoURL('');
            setEmail('');
            setPassword('');

            navigate('/');
          })
          .catch(error => {
            // console.log(error);
            toast.error(error.message);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          toast.error('User already exists in the database. Try another email');
        } else if (errorCode === 'auth/weak-password') {
          toast.error('Enter at least 6 digit password');
        } else if (errorCode === 'auth/invalid-email') {
          toast.error('Invalid email format. Please check your email address.');
        } else if (errorCode === 'auth/user-disabled') {
          toast.error('This user account has been disabled.');
        } else if (errorCode === 'auth/too-many-requests') {
          toast.error('Too many attempts. Please try again later.');
        } else if (errorCode === 'auth/network-request-failed') {
          toast.error('Network error. Please check your connection.');
        } else {
          toast.error(errorMessage || 'An unexpected error occurred.');
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <title>Chapterly - User Registration </title>
      <section className='h-full py-14'>
        <Container style='flex items-center justify-center px-4 h-full'>
          <div className='flex flex-row bg-base-100 w-[90%] lg:w-[65%] md:w-[85%] sm:w-[65%]  shadow-2xl rounded-xl'>
            <img
              className='rounded-l-xl object-cover w-1/2 hidden md:block'
              src='https://i.ibb.co.com/pvwBMjdh/olena-bohovyk-Ft-Wn-K5-YH8-unsplash-1-1.jpg'
              alt=''
            />

            <div className='card-body basis-1/2 self-center py-10'>
              <form onSubmit={handleUserRegister}>
                <h2 className='heading-secondary text-center mb-6'>
                  Open a New Chapter <br /> with Chapterly
                </h2>
                <fieldset className='fieldset'>
                  {/* Name */}
                  <label htmlFor='name' className='label'>
                    Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    className='input w-full'
                    placeholder='Name'
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    required
                  />
                  {/* PhotoUrl */}
                  <label htmlFor='photo' className='label'>
                    PhotoURL
                  </label>
                  <input
                    id='photo'
                    type='text'
                    className='input w-full'
                    placeholder='PhotoURL'
                    value={photoURL}
                    onChange={e => setPhotoURL(e.target.value)}
                    required
                  />
                  {/* Email */}
                  <label htmlFor='email' className='label'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    className='input w-full'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  {/* Password */}
                  <label htmlFor='pass' className='label'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      id='pass'
                      type={showPassword ? 'text' : 'password'}
                      className='input pr-10 w-full'
                      placeholder='Password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                    {password.length > 0 && (
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute top-1/2 right-3 z-10 -translate-y-1/2 cursor-pointer text-xl'>
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    )}
                  </div>
                  <p className='mt-1 text-gray-500 text-xs'>
                    Password length must be at least 6 chararacter, must have
                    both lower (a-z) and upper case letters (A-Z)
                  </p>

                  <button className='btn btn-neutral mt-4'>Register</button>
                </fieldset>
              </form>
              <div className='divider'>OR</div>
              {/* Google */}
              <GoogleLogin />
              <p className='text-center text-xs'>
                Already Have An Account?{' '}
                <Link className='hover:underline' to='/auth/login'>
                  Login now
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
