const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if(button.textContent === "="){
            display.value = eval(display.value)
        }
        else if (button.textContent === "C"){
            display.value = ""
        }
        else if (button.textContent === "X"){
            display.value = display.value.slice(0, -1)
        }

        else{
            display.value += button.textContent
        }
        
    })
})

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if(
        key >= "0" && key <= "9" ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." 
     ) {
        display.value += key

    }

    else if (key === "Enter" || key === "="){
        display.value = eval(display.value)

    }

    else if (key === "Backspace"){
        display.value = display.value.slice(0, -1)
    }

    else if (key === "Escape"){
        display.value = "";
    }
});