import {catAndCounts} from './data'
import './Category.css'

function CategoryList(props) {
  const { category, onClick } = props;

  return (
    <div className="Category">
      {catAndCounts.map(obj => {
        const { name, count } = obj
        const className = name === category ? 'selected' : '';
        return (
          <button
            className={className}
            onClick={() => onClick(name)}
          >
            {name}
            <span> {count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList;