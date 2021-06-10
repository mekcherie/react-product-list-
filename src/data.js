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
}, {})


const catAndCounts = uniqueCategories.map(name => {
    return { name, count: categoriesAndCounts[name] }
})

// const namesAndCategories = categoriesUnique.map((name) => ({ name, count: categoriesWithCounts[name] }))

// namesAndCategories.push({ name: 'All', count: data.length })

export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts,
    catAndCounts,
    // namesAndCategories

}