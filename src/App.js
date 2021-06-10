import './App.css';
import data, {allCategories, uniqueCategories, categoriesAndCounts, catAndCounts} from './data'

// console.log(data)
// console.log(allCategories)
// console.log(uniqueCategories)
// console.log(categoriesAndCounts)
// console.log(catAndCounts)

function App() {
  return (
    <div className="App">
       <h1>Productify</h1>
       <p>Product Count: {data.length}</p>
       <p>Category Count: {uniqueCategories.length}</p>
       {catAndCounts.map(obj => {
         return (
           <button>
             {obj.name}
             <span> {obj.count} </span>
           </button>
         )
       })}
    </div>
  );
}

export default App;
