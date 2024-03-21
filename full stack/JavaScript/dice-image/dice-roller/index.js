function RollDice(){
    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceresult")
    const diceImages = document.getElementById("diceimage")
    const values = []
    const image = []

    for(let i=0; i< numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1
        // console.log(value)
        values.push(value)
        image.push(`<img src="img/${value}.png" >`)

    }
    diceResult.textContent = `dice : ${values.join(', ')}`;
    diceImages.innerHTML = image.join(' ')




}