import {catAndCounts} from './data'
function Category() {
    return (
        <div>
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