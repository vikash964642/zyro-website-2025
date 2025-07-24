
import FeaturesConnectedBanking from './section/FeaturesConnectedBanking';
import HeroSection from './section/HeroSection';
import Scroller from './section/Scroller';
import BusinessScroller from './section/BusinessScroller';
import BankDetails from './section/BankDetails';
import HorizentalSlider from './section/HorizentalSlider';
import ConnectedCardSlider from './section/ConnectedCardSlider';
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
    </div>
  )
}

export default ConnectedBanking