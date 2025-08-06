import PosFeatures from './section/PosFeatures';
import FAQ from './section/FAQ';
import BusinessBanking from './section/BusinessBanking';
import HorizentalSlider from './section/HorizentalSlider';
import PosMachineFeatures from './section/PosMachineFeatures';
import HeroSection from './section/HeroSection';
import PosSystemSlider from './section/PosSystemSlider';
function Pos() {
  return (
  <>
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