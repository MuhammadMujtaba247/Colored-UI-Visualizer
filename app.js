let colorInput = document.getElementById('color-input')
let textInput = document.getElementById('text-input')
let pattern = /^#[0-9A-Fa-f]{6}$/
let button1 = document.getElementById('preview-button1')
let button2 = document.getElementById('preview-button2')
let para = document.getElementById('preview-para')
let card1 = document.getElementById('preview-card1')
let card2 = document.getElementById('preview-card2')
let svg = document.getElementById('Dribbble-Light-Preview')
let currentColor;

function updateColorText() {
    if (pattern.test(textInput.value)) {
        currentColor = textInput.value
        colorInput.value = textInput.value
        updatePreviews()
    }
}
function updateColorColor() {
    currentColor = colorInput.value
    textInput.value = colorInput.value
    updatePreviews()
}
function updatePreviews() {
    button1.style.color = currentColor
    button1.style.borderColor = currentColor
    button2.style.backgroundColor = currentColor
    para.style.color = currentColor
    para.style.borderColor = currentColor
    card1.style.color = currentColor
    card1.style.borderColor = currentColor
    card2.style.backgroundColor = currentColor
    svg.style.fill = currentColor
}


