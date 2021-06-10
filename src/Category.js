import {catAndCounts} from './data'
import './Category.css'

function Category() {
    return (
        <div className = "Category">
        {catAndCounts.map(obj => {
          return (
            <button>
              {obj.name}
              <span> {obj.count} </span>
            </button>
         )
       })}
    </div>
    )
}

export default Category