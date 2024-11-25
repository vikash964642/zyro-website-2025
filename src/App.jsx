

import Header from "./Component/NewHeader/Navbar";
import { HashRouter as Router} from "react-router-dom";
import Connected_banking from "./Component/Pages/Homepage/Connected_banking";
import Features from "./Component/Pages/Homepage/Features";
import QrSoundBox from "./Component/Pages/Homepage/QrSoundBox";
import Credit_facility from "./Component/Pages/Homepage/Credit_facility";

function App() {
 

  return (
    <>
    <Router>

    < Header/>
    
    <Connected_banking />
    <Features />
    <QrSoundBox />
    <Credit_facility />

    </Router>
    </>
  )
}

export default App
