
import HeroSection from './Section/HeroSection';
import StaticCard from './Section/StaticCard'
import ZyroCard from './Section/ZyroCard';
import SmartControl from './Section/SmartControl';
import PrepaidCardDesign from './Section/PrepaidCardDesign';
import ZyroPaySpending from './Section/ZyroPaySpending';
import ListCard from './Section/ListCard';
import FAQ from './Section/FAQ';
import BusinessBanking from './Section/BusinessBanking';
import CustomHelmet from "../../Utils/Helmet"

function Prepaid() {
  return (
  <>
                        <CustomHelmet  title={"Prepaid Cards for Shopping, Travel & Expense: Zyro Rupay Card"} content={"Zyro RuPay Prepaid Cards for shopping, travel, and expense management. Enjoy secure, cashless payments with ease & full control over your spending now."} />

  <HeroSection />
  <StaticCard />
  <ZyroCard />
  <SmartControl />
  <PrepaidCardDesign />
  <ZyroPaySpending />
  <ListCard />
  <FAQ />
  <BusinessBanking />
  </>
  )
}

export default Prepaid