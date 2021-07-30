import 'bootstrap/dist/css/bootstrap.min.css';
import RiffleSplitParent from './components/RiffleSplitParent'
import OverHandParent from './components/OverHandParent';
import BestShuffleParent from './components/BestShuffleParent';
import Title from './components/Title';
import ManufacturedDeckParent from './components/ManufacturedDeckParent';

const App = () => {

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>

      {
        window.screen.width > 1100 ?

          (<div className="d-none d-lg-block" style={{ maxWidth: "1100px" }}>
            <Title />
            <ManufacturedDeckParent />
            <RiffleSplitParent />
            <OverHandParent />
            <BestShuffleParent />
          </div>)
          :

          (<div className="d-lg-none" style={{ maxWidth: window.screen.width - 50 }} >

            <Title />
            <ManufacturedDeckParent />
            <RiffleSplitParent />
            <OverHandParent />
            <BestShuffleParent />
          </div>
          )
      }



    </div>

  );
}

export default App;


//      <div className="d-none d-lg-block" style={{ maxWidth: "1100px" }}>
//      <div/>

//      <div className = "d-lg-none">
//      <div/>