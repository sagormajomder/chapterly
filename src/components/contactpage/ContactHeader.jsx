const ContactHeader = () => {
  return (
    <div className='text-center py-10 md:py-16 bg-gradient-to-b from-red-50 to-transparent mb-10'>
      <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>
        We'd Love to Hear <br className='hidden md:block' />
        From <span className='text-primary'>You</span>
      </h1>
      <p className='text-gray-600 max-w-2xl mx-auto px-4 text-sm md:text-base'>
        Have a question about a book? Need help with your account? Or just want
        to suggest a new feature for your reading journey? Our team is here to
        help.
      </p>
    </div>
  );
};

export default ContactHeader;
