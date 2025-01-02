function appendValue(value){
    const inputBox = document.querySelector(".inputbox")
    inputBox.value += value
}

function clearResult(){
    const inputBox = document.querySelector(".inputbox")
    inputBox.value = ''
}

function deleteValue(){
    const inputBox = document.querySelector(".inputbox")
    inputBox.value = inputBox.value.toString().slice(0,-1)
}

function calculateResult(){
    const inputBox = document.querySelector(".inputbox")
    try{
        inputBox.value = eval(inputBox.value)
        inputBox.value = parseFloat(inputBox.value).toFixed(2)
        
    }
    catch(error){
    inputBox.value = "Error"
    }
}

