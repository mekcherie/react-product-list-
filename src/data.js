import data from './data.json'


export default data

// console.log(data[1]) 

const allCategories = data.map(obj => obj.category)
const uniqueCategories = Array.from( new Set(allCategories) )


export {
    allCategories,
    uniqueCategories
}