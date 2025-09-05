import Header from "./Component/NewHeader/Navbar";
// import Header from './Component/Header/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";
import ConnectedBanking from "./Component/Pages/ConnectedBankingPage/ConnectedBanking";
import PayOut from "./Component/Pages/PayOutPage/PayOut";
import SoundboxPage from "./Component/Pages/SoundboxPage/SoundboxPage";
import ExpenseManagement from "./Component/Pages/ExpenseManagement/ExpenseManagement";
import Prepaid from "./Component/Pages/Prepaid/Prepaid";
import Pos from "./Component/Pages/PosPage/Pos";

import AboutUs from "./Component/Pages/AboutUs/AboutUs";

import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Terms from "./Component/Pages/Terms";
import Privacy from "./Component/Pages/Privacy";
import UPIStack from "./Component/Pages/UPIStack/UPIStack";
import IMPSSwitch from "./Component/Pages/IMPSSwitch/IMPSSwitch";
function App() {
  // usePreventZoom();
  return (
    <>
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<HomePage />} /> 
           <Route path="/connected-banking" element={<ConnectedBanking/>}  />
           <Route path="/payout-payment" element={<PayOut/>} />
           <Route path="/smart-soundbox-speaker" element={<SoundboxPage/>}  />
           <Route path="/expense-management-tracking-software" element={<ExpenseManagement/>}  />
           <Route path="/prepaid-cards" element={<Prepaid/>}  />
           <Route path="/pos-machine-system" element={<Pos/>}  />
             <Route path="/upi-stack" element={<UPIStack/>}  />
            <Route path="/about-us" element={<AboutUs/>}  />
            <Route path="/contact-us" element={<ContactUs/>}  />
            <Route path="/terms-and-conditions" element={<Terms/>}  />
            <Route path="/privacy-policy" element={<Privacy/>}  />
             <Route path="/imps-switch" element={<IMPSSwitch/>}  />

         
        </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;
