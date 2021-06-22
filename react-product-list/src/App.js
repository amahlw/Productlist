import './App.css';
import data, { uniqueCategories } from './data'
import Prolist from './Prolist'
import Catolist from './Catolist'
import Header from './Header'
// import './Catolist.css'
// import './Prolist.css'
import { useState } from 'react'



function App() {
  const { catSelect, catSet } = useState('Tools')
  return (
    <div className="App">

      <Header
        title="Product list"
        Prolist={data.length}
        Catolist={uniqueCategories.length}
      />


      <Catolist catSelect={catSelect} />

      <Prolist catSelect={catSelect} />
    </div>
  );
}

export default App;
