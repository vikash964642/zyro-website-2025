
import FeaturesConnectedBanking from './section/FeaturesConnectedBanking';
import HeroSection from './section/HeroSection';

import BusinessScroller from './section/BusinessScroller';
import BankDetails from './section/BankDetails';
import HorizentalSlider from './section/HorizentalSlider';
import ConnectedCardSlider from './section/ConnectedCardSlider';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import ConnectedBankingVerticleSlider from './section/ConnectedBankingVerticleSlider';
import CustomHelmet from "../../Utils/Helmet"
function ConnectedBanking() {
  return (
    <div>
                      <CustomHelmet  title={"Connected Banking: Business Payments Platform for All Accounts"} content={"Zyro Connected Banking: Best business payments platform to manage all your bank accounts in one place. Simplify transactions and automate payments now!"} />

        <HeroSection/>
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