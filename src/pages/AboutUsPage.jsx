import { default as AboutBanner } from '../components/aboutpage/AboutBanner';
import CoreValues from '../components/aboutpage/CoreValues';
import OfferSection from '../components/aboutpage/OfferSection';

const AboutUsPage = () => {
  return (
    <div>
      <AboutBanner />
      <CoreValues />
      <OfferSection />
    </div>
  );
};

export default AboutUsPage;
