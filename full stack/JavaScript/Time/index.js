
let timeOutID
function startTimer(){
    setTimeout(() => window.alert("hello"), 3000)
    console.log('starter')
}

function clearTimer(){
       clearTimeout(timeOutID) 
       console.log('clear')

}