import './App.css';
import data, { uniqueCategories} from './data'

import Category from './Category'
import Header from './Header'
function App() {
  return (
    <div>
    <div className="App">
       <Header  
          title="productify"
          productCount = {data.length} 
          categoryCount = {uniqueCategories} />

        <Category />
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
