import data from './data.json'


export default data

// console.log(data[1])

// setting list of categories 

const allCategories = data.map(obj => obj.category)

const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0
    return acc
}, {})

// removing Duplicate categories
const uniqueCategories = Object.keys(cats)

const catCount = allCategories.reduce((acc, allCategories) => {
    if (acc[cats] === undefined) {
        acc[cats] = 1
    }
    else {
        acc[cats] += 1
    }
    return acc
}, {})



export {
    allCategories,
    uniqueCategories,
    catCount


}
