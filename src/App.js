import 'bootstrap/dist/css/bootstrap.min.css';
import RiffleSplitParent from './components/RiffleSplitParent'
import OverHandParent from './components/OverHandParent';
import BestShuffleParent from './components/BestShuffleParent';
import Title from './components/Title';
import ManufacturedDeckParent from './components/ManufacturedDeckParent';
import RandomParent from './components/RandomParent';
import Conclusion from './components/Conclusion';
import { useState } from 'react';
import TotalPermutations from './components/TotalPermutations';


const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  window.addEventListener("resize", function () {
    setWindowSize(this.window.innerWidth)
  })

  window.document.title = "The Mathematics Behind a Deck of Cards"

  return (
    <div style={{ justifyContent: 'center', display: 'flex', marginTop: '30px' }}>
      {
        windowSize > 990 ?

          (<div className="d-none d-lg-block" style={{ maxWidth: "1100px" }}>
            <Title />
            <ManufacturedDeckParent />
            <RandomParent />
            <RiffleSplitParent />
            <OverHandParent />
            <BestShuffleParent />
            <TotalPermutations />
            <Conclusion />
          </div>)
          :

          (<div className="d-lg-none" style={{ maxWidth: window.screen.width - 50 }} >
            <Title />
            <ManufacturedDeckParent />
            <RandomParent />
            <RiffleSplitParent />
            <OverHandParent />
            <BestShuffleParent />
            <TotalPermutations />
            <Conclusion />
          </div>
          )
      }
    </div >
  );
}

export default App;


//      <div className="d-none d-lg-block" style={{ maxWidth: "1100px" }}>
//      <div/>

//      <div className = "d-lg-none">
//      <div/>