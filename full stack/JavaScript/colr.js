const zodiac = document.getElementById("zodiac");

const body = document.body;

const changebackground = () =>{
    switch(zodiac.value)
    {
        case "aries":
            body.style.backgroundColor = "#8c9e46";
            break;
        case "taurus":
            body.style.backgroundColor = "#369eb3";
            break;
        case "gemini":
            body.style.backgroundColor = "#182863";
            break;
        case "cancer":
            body.style.backgroundColor = "#4c3759";
            break;
        case "leo":
            body.style.backgroundColor = "#8f219c";
            break;
        case "virgo":
            body.style.backgroundColor = "#31c453";
            break;
        case "libra":
            body.style.backgroundColor = "#1a031c";
            break;
        case "scorpio":
            body.style.backgroundColor = "#2d232e";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#ba1e6c";
            break;
        case "aquarius":
            body.style.backgroundColor = "#cedb0f";
            break;
        case "capricorn":
            body.style.backgroundColor = "#911333";
            break;
        case "pisces":
            body.style.backgroundColor = "#b82818";
            break;
        default:
            body.style.backgroundColor = "#fff";

            break
    }
}