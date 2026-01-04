import ContactForm from '../components/contactpage/ContactForm';
import ContactHeader from '../components/contactpage/ContactHeader';
import ContactInfo from '../components/contactpage/ContactInfo';
import HelpCenter from '../components/contactpage/HelpCenter';

const ContactUsPage = () => {
  return (
    <div className='min-h-screen bg-white pb-20'>
      <ContactHeader />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Left Column: Form */}
          <div className='lg:col-span-7'>
            <ContactForm />
          </div>

          {/* Right Column: Info & Help Center */}
          <div className='lg:col-span-5 h-full flex flex-col'>
            <ContactInfo />
            <HelpCenter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
