const input = document.getElementById("MyInp");
const btn = document.getElementById("MyBtn");

const btnClick = () =>{
    // alert(input.value);
    sessionStorage.setItem("key1",input.value);
};

btn.addEventListener("click",btnClick) ;
alert(sessionStorage.getItem("key1"));