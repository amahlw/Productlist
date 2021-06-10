import './App.css';
import data, { uniqueCategories } from './data'
import Prolist from './Prolist'
import Catolist from './Catolist'
import './Catolist.css'
import './Prolist.css'



function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <p> Product Count:{data.length} </p>
      <p>Category Count:{uniqueCategories.length} </p>
      <Catolist />

      <Prolist />
    </div>
  );
}

export default App;
