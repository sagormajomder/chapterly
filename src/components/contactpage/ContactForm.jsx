import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual submission logic here
  };

  return (
    <div className='bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100'>
      <div className='flex items-center gap-2 mb-6'>
        <span className='text-red-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
          </svg>
        </span>
        <h2 className='text-xl font-bold text-gray-900'>Send us a message</h2>
      </div>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Jane'
              className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-gray-50/50'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Doe'
              className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-gray-50/50'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='jane@example.com'
            className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-gray-50/50'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Subject
          </label>
          <select
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-gray-50/50 appearance-none cursor-pointer'>
            <option value='General Inquiry'>General Inquiry</option>
            <option value='Support'>Support</option>
            <option value='Feedback'>Feedback</option>
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='How can we help you today?'
            rows='4'
            className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-gray-50/50 resize-none'></textarea>
        </div>

        <button
          type='submit'
          className='bg-[#ff4d5a] hover:bg-[#ff3342] text-white font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
