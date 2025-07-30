
import HeroSection from './section/HeroSection';
import BusinessCard from './section/BusinessCard';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import ConnectedCardSlider from './section/ConnectedCardSlider';
import Scroller from '../HomePage/section/Scroller';
import BulkPayment from './section/BulkPayment';
import BuiltBusinessAnimation from './section/BuiltBusinessAnimation';

function PayOut() {
  return (
 <>
 <HeroSection />
 <Scroller />
 <ConnectedCardSlider />
 <BulkPayment />
 <BusinessCard />
 <BuiltBusinessAnimation />
 <FAQ />
 <BusinessBanking />
 </>
  )
}

export default PayOut