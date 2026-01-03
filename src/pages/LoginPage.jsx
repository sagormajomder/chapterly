import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router';
import Container from '../components/Container';
import GoogleLogin from '../components/GoogleLogin';
import { useAuth } from '../contexts/AuthContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setIsLoading } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const watchedPassword = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  function handleUserLogin(data) {
    const { email, password } = data;
    signInUser(email, password)
      .then(userCredential => {
        toast.success('user log in successfully!');

        // Clear info
        reset();

        navigate(location.state ?? '/');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/invalid-email') {
          toast.error('Invalid email format. Please check your email.');
        } else if (errorCode === 'auth/invalid-credential') {
          toast.error(
            'User not found. Please enter correct email and password'
          );
        } else if (errorCode === 'auth/user-not-found') {
          toast.error('User not found. Please sign up first.');
        } else if (errorCode === 'auth/wrong-password') {
          toast.error('Wrong password. Please try again.');
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
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDemoLogin() {
    setValue('email', 'demo@gmail.com', { shouldValidate: true });
    setValue('password', 'Demo01%', { shouldValidate: true });
  }
  return (
    <>
      <title>Chapterly - User Login</title>
      <section className='h-full py-14'>
        <Container style='flex items-center justify-center px-4 h-full'>
          <div className='flex bg-base-100 w-[90%] lg:w-[65%] md:w-[85%] sm:w-[65%] shadow-2xl rounded-lg'>
            <img
              className='rounded-l-xl object-cover w-1/2 hidden md:block'
              src='https://i.ibb.co.com/Kpc7xfdJ/islander-Ls0gs-I-AEb0-unsplash-1.jpg'
              alt=''
            />
            <div className='card-body basis-1/2 self-center py-10'>
              <form onSubmit={handleSubmit(handleUserLogin)}>
                <div className='mb-6 text-center'>
                  <h2 className='heading-secondary mb-0.5'>Welcome Back</h2>
                  <p className='text-xs'>Log in your account</p>
                </div>
                <fieldset className='fieldset'>
                  {/* Email */}
                  <label htmlFor='email' className='label'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    className='input w-full'
                    placeholder='Email'
                    {...register('email', { required: true })}
                  />
                  {errors.email?.type === 'required' && (
                    <span className='text-red-400'>Email is required!</span>
                  )}
                  {/* Password */}
                  <label htmlFor='pass' className='label'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z]).(?=.*\d).(?=.*[^A-Za-z0-9]).+$/,
                      })}
                      className='input w-full '
                      placeholder='Password'
                      id='pass'
                    />

                    {watchedPassword.length > 0 && (
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

                  {errors.password?.type === 'required' && (
                    <span className='text-red-400'>Password is required!</span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className='text-red-400'>
                      Password must be at least 6 characters!
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className='text-red-400'>
                      Password must contain at least one uppercase, one
                      lowercase letter, one digit and one special characters!
                    </span>
                  )}
                  <div>
                    <a className='link link-hover hover:text-accent'>
                      Forgot password?
                    </a>
                  </div>
                  <button className='btn btn-primary mt-4'>Login</button>
                  <button
                    type='button'
                    onClick={handleDemoLogin}
                    className='btn btn-primary btn-outline mt-4'>
                    Demo Credentials (User)
                  </button>
                </fieldset>
              </form>
              <div className='divider'>OR</div>
              {/* Google */}
              <GoogleLogin />
              <p className='text-center text-xs'>
                Don't Have An Account?{' '}
                <Link
                  className='hover:underline hover:text-accent'
                  to='/auth/register'>
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
