function UpdateClock(){
    const now = new Date()
    let hours = now.getHours()
    const mer = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const sec = now.getSeconds().toString().padStart(2, 0)
    const timestring = `${hours}:${minutes}:${sec} ${mer}`
    document.getElementById("clock").textContent = timestring

}
UpdateClock()
setInterval(UpdateClock, 1000)