import './App.css';
import {useState} from 'react'
import data, { uniqueCategories} from './data'
import Header from './Header'
import Category from './Category'
import Inventory from './Inventory';
function App() {
  const [category, setCategory] = useState('Kids');
  return (
    <div>
    <div className="App">
      <Header  
          title="productify"
          productCount = {data.length} 
          categoryCount = {uniqueCategories} />

      <Category
        category={category}
        onClick={newCategory => setCategory(newCategory)}
      />

      <Inventory />
      </div>

    <div className ="obj"> 
      {data.map(obj => {
      return (
        <div className="Product">
          <h2>{obj.name}</h2>
          <p>{obj.description}</p>
          <p>Price: {obj.price}</p>
          <p>Name: {obj.name}</p>
          <h6>Rating: {obj.rating}</h6>
      </div>
      )
      })}
    </div>
    </div>
  );
}

export default App;
