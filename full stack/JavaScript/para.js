const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const GenerateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];

    }
    return text;
}
const generatePara = () => {
    const numOfWords = Number(input.value)

    const para = document.createElement("p");
    let data = "";

    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += GenerateWord(randomNumber);
        data += " ";

    }
    para.innerText = data;

    para.setAttribute("class", "mypara");

    container.append(para);

}