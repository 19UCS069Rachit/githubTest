class Product{
    constructor(name, price){
        this.name = name
        this.price = price

    }
    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)

    }
}
const prod1 = new Product('tab', 2000)

// prod1.displayProduct()

const date = new Date()

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
// console.log(year)
// console.log(month)

// console.log(day)

//closure()
function CreateCounter(){
    let count = 0
    function increment(){
        count++
        console.log(`count increased to ${count}`)

    }
    function getCount(){
        return count
    }
    return {increment, getCount}
}

const counter = CreateCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(`current ${counter.getCount()}`)