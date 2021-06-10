import './Header.css'
function Header (props) {
    const title = props.title 
    const productCount = props.productCount
    // const categoryCount = props.categoryCount 
    return (
        <div className="Header">
            <h1>{title}</h1>
            <p>Product Count: {productCount}</p>
            {/* <p>Category Count: {categoryCount}</p> */}
        </div>
    )
}

export default Header 