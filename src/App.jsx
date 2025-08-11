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
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
function App() {
  // usePreventZoom();
  return (
    <>
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<HomePage />} /> 
           <Route path="/connectedbanking" element={<ConnectedBanking/>}  />
           <Route path="/payout" element={<PayOut/>} />
           <Route path="/soundboxPage" element={<SoundboxPage/>}  />
           <Route path="/ExpenseManagement" element={<ExpenseManagement/>}  />
             <Route path="/prepaidPage" element={<Prepaid/>}  />
                <Route path="/posPage" element={<Pos/>}  />
                <Route path="/ContactUs" element={<ContactUs/>}  />
         
        </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;
