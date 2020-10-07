// defining variables
// ----------------------------------------------------------------
// the headline element
const display = document.querySelector('#display')

// the input field for size
const inputSize = document.querySelector('#input-size')
// the element that displays the value
const showSize = document.querySelector('#show-size')

// the select field for font
const selectFont = document.querySelector('#select-font')
// the element that display the font
const showFont = document.querySelector('#show-font')

// the input field for color
const inputColor = document.querySelector('#input-color')
// the element that display the color
const showColor = document.querySelector('#show-color')

// the input fiel for background color
const inputBackgroundColor = document.querySelector('#input-bg-color')
// the element that display the background color
const showBackgroundColor = document.querySelector('#show-bg-color')

// the input field for textarea
const textArea = document.querySelector('#enter-text')


// adding event listeners
// ----------------------------------------------------------------
inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBackgroundColor.addEventListener('input', handleInput)
textArea.addEventListener('input', handleInput)


function handleInput() {
    // font-size
    //------------------------------------
    // get the font size
    const fontSize = inputSize.value
    // set the style
    display.style.fontSize = `${fontSize}px`
    // show the size
    showSize.innerHTML = fontSize

    // font-family
    //------------------------------------
    const fontFamily = selectFont.value
    display.style.fontFamily = fontFamily
    showFont.innerHTML = fontFamily

    // color
    //------------------------------------
    const color = inputColor.value
    display.style.color = color
    showColor.innerHTML = color

    // background color
    //------------------------------------
    const backgroundColor = inputBackgroundColor.value
    display.style.backgroundColor = backgroundColor
    showBackgroundColor.innerHTML = backgroundColor

    // text
    //------------------------------------
    const text = textArea.value
    display.innerHTML = text
}

