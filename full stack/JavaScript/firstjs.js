const myBtn = document.getElementById("myBtn");
myBtn.style.color = "blue";

function bringMeHeading(){
    const h2 = document.createElement("h2");
    h2.innerText = "rachit";
    document.body.prepend(h2);
    
}

myBtn.onclick =  bringMeHeading;