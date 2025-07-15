import Header from "./Component/NewHeader/Navbar";
// import Header from './Component/Header/Header'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";
import ConnectedBanking from "./Component/Pages/ConnectedBankingPage/ConnectedBanking";

function App() {
  return (
    <>
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<HomePage />} /> 
           <Route path="/connectedbanking" element={<ConnectedBanking/>}  />
         
        </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;
