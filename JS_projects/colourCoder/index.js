const body = document.getElementsByTagName("body")[0]
const randomButton = document.getElementsByTagName("button")[4]

function setColour(name) {
    body.style.backgroundColor = name;
}

function randomColour() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const colour = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = colour;
    randomButton.style.backgroundColor = colour;
}
