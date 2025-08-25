
import HeroSection from './Section/HeroSection';
import CorporateCardManagement from './Section/CorporateCardManagement';
import ExpenseOverview from './Section/ExpenseOverview';
import ControlAndClarity from './Section/ControlAndClarity';
import SignupTracking from './Section/SignupTracking';
import FeaturesExpenseManage from './Section/FeaturesExpenseManage';
import SmartExpense from './Section/SmartExpense';
import FAQ from './Section/FAQ';
import Digitize from './Section/Digitize';
import CustomHelmet from "../../Utils/Helmet"

// import RoleBased from './Section/RoleBased';

function ExpenseManagement() {
  return (
    <>
                          <CustomHelmet  title={"Best Expense Management Tracking Software System in India"} content={"Best Expense Management Tracking Software System in India to simplify business finances, control spending, & boost efficiency with smart automation. Quotenow!"} />

    <HeroSection />
    <CorporateCardManagement />
    <ExpenseOverview />
    <ControlAndClarity />
    {/* <RoleBased /> */}
    <SignupTracking />
    <FeaturesExpenseManage />
    <SmartExpense />
    <FAQ />
    <Digitize/>
    </>
  )
}

export default ExpenseManagement