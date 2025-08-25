import PosFeatures from './section/PosFeatures';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import HorizentalSlider from './section/HorizentalSlider';
import PosMachineFeatures from './section/PosMachineFeatures';
import HeroSection from './section/HeroSection';
import PosSystemSlider from './section/PosSystemSlider';
import CustomHelmet from "../../Utils/Helmet"

function Pos() {
  return (
  <>
                        <CustomHelmet  title={"POS Machine: ZYRO EDC Card Swipe Machines for Payments"} content={"POS machine systems and EDC card swipe machines offering multiple payment options for fast, secure, and convenient transactions in businesses. Quote Now"} />

  <HeroSection />
  <PosFeatures />
  <HorizentalSlider />
  <PosMachineFeatures />
  <PosSystemSlider />
  <FAQ />
  <BusinessBanking />
  </>
  )
}

export default Pos