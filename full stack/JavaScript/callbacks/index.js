

function hello(callback){
    console.log("hello")
    callback()
}


function Goodbye(){
    console.log("Goodbye!!")
}


function sum(callback, x, y){
    let result = x + y
    callback(result)
}

function displayResult(result){
    console.log(result)
}
function displayPage(result){
    document.getElementById("myH1").textContent = result

}
// sum(displayPage, 5, 9)
// forEach()  -- method

let number = [1, 2, 3, 4, 5]

// number.forEach(double)
// number.forEach(display)


function display(element)
{
    console.log(element)
}

function double(element, index, array){
    array[index] = element * 2
    
}


const dates = ['2024-1-10', '2025-2-10', '2026-3-10']
const formatteddates = dates.map(formatDates)
// console.log(dates)
// console.log(formatteddates)

function formatDates(element){
    const parts = element.split('-')
    return `${parts[1]}/${parts[2]}/${parts[0]}`

}

const numbersss = [1,2,3,4,5]

const squares = numbersss.map(function(element){
    return Math.pow(element, 2)
})

// console.log(squares)

const cubes = numbersss.map(function(element){
    return Math.pow(element, 3)
})
// console.log(cubes)


const evenNums = numbersss.filter(function(element){
    return element % 2 === 0
})

// console.log(evenNums)
// function square(element){
//     return Math.pow(element, 2)
// }

const arrosq = numbersss.map((element) => Math.pow(element, 2))
console.log(arrosq)

const cubess = numbersss.map((element) => Math.pow(element, 3))

console.log(cubess)