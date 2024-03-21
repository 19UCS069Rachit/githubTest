const myBox = document.getElementById("myBox")



// function changeColor(event){
//     // console.log(event)
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "Ouch😒"
    
// }

myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "Ouch😒"

})
// myBox.addEventListener("click", changeColor)

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "don't do it 🤦‍♂️"

})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "grey"
    event.target.textContent = "Click Me 😁"

})
