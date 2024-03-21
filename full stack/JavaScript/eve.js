const heading = document.getElementById("heading");
const button = document.getElementById("myBt");
const box1 = document.getElementById("Box1");
const inp = document.querySelector("input");
button.addEventListener("click", () =>{
    box1.classList.add("divBox");
});

box1.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    heading.style.backgroundColor = "pink";
});
box1.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";
    button.style.transform = "";
});
inp.addEventListener("change", (e) =>{
    // console.log("Changing");
    console.log(e.target.value);
});