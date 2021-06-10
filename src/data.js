import data from './data.json'

export default data

// console.log(data[1]) 

const allCategories = data.map(obj => obj.category)
// const uniqueCategories = Array.from( new Set(allCategories) )
const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0
    return acc
}, {})

const uniqueCategories = Object.keys(cats)

const categoriesAndCounts = allCategories.reduce((acc, cat) => {
    if (acc[cat] === undefined) {
        acc[cat] = 1 
    } else {
        acc[cat] += 1 
    }
    return acc
})
export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts,
}