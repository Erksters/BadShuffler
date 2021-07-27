import 'bootstrap/dist/css/bootstrap.min.css';
import RiffleSplitParent from './components/RiffleSplitParent'
import OverHandParent from './components/OverHandParent';
import BestShuffleParent from './components/BestShuffleParent';
import Title from './components/Title';
import ManufacturedDeckParent from './components/ManufacturedDeckParent';

const App = () => {

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div style={{ maxWidth: "1100px" }}>
        <Title />
        <ManufacturedDeckParent />
        <RiffleSplitParent />
        <OverHandParent />
        <BestShuffleParent />
      </div>

    </div>

  );
}

export default App;
