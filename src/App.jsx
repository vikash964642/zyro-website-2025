

import Header from "./Component/NewHeader/Navbar";
import { HashRouter as Router} from "react-router-dom";
import Connected_banking from "./Component/Pages/Homepage/Connected_banking";
import Features from "./Component/Pages/Homepage/Features";

function App() {
 

  return (
    <>
    <Router>

    < Header/>
    
    <Connected_banking />
    <Features />

    </Router>
    </>
  )
}

export default App
