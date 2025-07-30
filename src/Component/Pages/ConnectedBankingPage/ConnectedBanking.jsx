
import FeaturesConnectedBanking from './section/FeaturesConnectedBanking';
import HeroSection from './section/HeroSection';
import Scroller from './section/Scroller';
import BusinessScroller from './section/BusinessScroller';
import BankDetails from './section/BankDetails';
import HorizentalSlider from './section/HorizentalSlider';
import ConnectedCardSlider from './section/ConnectedCardSlider';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import ConnectedBankingVerticleSlider from './section/ConnectedBankingVerticleSlider';
function ConnectedBanking() {
  return (
    <div>
        <HeroSection/>
        <Scroller />
        <FeaturesConnectedBanking />
        <BusinessScroller />
        <BankDetails />
        <HorizentalSlider />
        <ConnectedCardSlider />
        <ConnectedBankingVerticleSlider />
        <FAQ />
        <BusinessBanking/>
    </div>
  )
}

export default ConnectedBanking