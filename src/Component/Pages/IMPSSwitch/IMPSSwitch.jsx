import HeroSection from './section/HeroSection';
import IMPSGlance from './section/IMPSGlance';
import KeyCapabilities from './section/KeyCapabilities';
import IMPSService from './section/IMPSService';
import ChannelIntegration from './section/ChannelIntegration';
import RealTimeBeneficiary from './section/RealTimeBeneficiary';
import BeneficiaryAccount from './section/BeneficiaryAccount';
import BANLSlider from './section/BANLSlider';
import DigitalPayment from './section/DigitalPayment';
import IMPSScaleSecurity from './section/IMPSScaleSecurity';
import BankStartup from './section/BankStartup';
function IMPSSwitch() {
  return (
   <>
   <HeroSection />
   <IMPSGlance />
   <KeyCapabilities />
   <IMPSService />
   <IMPSScaleSecurity />
   <ChannelIntegration />
   <BankStartup />
   <BeneficiaryAccount />
   <RealTimeBeneficiary />
   
   <BANLSlider />
   <DigitalPayment />
   </>
  )
}

export default IMPSSwitch