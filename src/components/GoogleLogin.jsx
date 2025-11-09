import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export default function GoogleLogin() {
  const { googleLogin, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleGoogleLogin() {
    googleLogin()
      .then(result => {
        toast.success('User login successfully');
        navigate(location.state ?? '/');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          toast.error('User already exists in the database. Try another email');
        } else if (
          errorCode === 'auth/account-exists-with-different-credential'
        ) {
          toast.error('Same email used with diffent social login');
        } else if (errorCode === 'auth/user-disabled') {
          toast.error('This user account has been disabled.');
        } else if (errorCode === 'auth/too-many-requests') {
          toast.error('Too many attempts. Please try again later.');
        } else if (errorCode === 'auth/operation-not-allowed') {
          toast.error('Operation not allowed. Please contact support.');
        } else if (errorCode === 'auth/network-request-failed') {
          toast.error('Network error. Please check your connection.');
        } else if (errorCode === 'auth/popup-closed-by-user') {
          toast.error('User closed the gooogle login popup.');
        } else {
          toast.error(errorMessage || 'An unexpected error occurred.');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <button
      onClick={handleGoogleLogin}
      className='btn bg-white text-black border-[#e5e5e5] mb-4'>
      <svg
        aria-label='Google logo'
        width='16'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'>
        <g>
          <path d='m0 0H512V512H0' fill='#fff'></path>
          <path
            fill='#34a853'
            d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'></path>
          <path
            fill='#4285f4'
            d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'></path>
          <path
            fill='#fbbc02'
            d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'></path>
          <path
            fill='#ea4335'
            d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'></path>
        </g>
      </svg>
      Continue With Google
    </button>
  );
}
