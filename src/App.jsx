import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/NewHeader/Navbar";
import Footer from "./Component/Footer/Footer";
import HomePage from "./Component/Pages/HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route>
            <HomePage />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
