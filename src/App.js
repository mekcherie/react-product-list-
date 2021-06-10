import './App.css';
import data, {allCategories, uniqueCategories, categoriesAndCounts, catAndCounts} from './data'

import Category from './Category'
function App() {
  return (
    <div>
    <div className="App">
       <h1>Productify</h1>
       <p>Product Count: {data.length}</p>
       <p>Category Count: {uniqueCategories.length}</p>

       <Category />
       </div>
    <div> 
      {data.map(obj => {
      return (
        <div>
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
