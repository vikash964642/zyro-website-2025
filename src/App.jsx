import Header from "./Component/NewHeader/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<HomePage />}> 
            
          </Route>
        </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;
