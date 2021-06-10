import './App.css';
import data, { uniqueCategories } from './data'
import Prolist from './Prolist'
import Catolist from './Catolist'
import Header from './Header'
// import './Catolist.css'
// import './Prolist.css'



function App() {
  return (
    <div className="App">

      <Header
        title="Product list"
        Prolist={data.length}
        Catolist={uniqueCategories.length}
      />


      <Catolist />

      <Prolist />
    </div>
  );
}

export default App;
