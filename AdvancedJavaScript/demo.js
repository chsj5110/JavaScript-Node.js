let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event){
    let enterdText = event.target.value;
    let enterdTextLength = enterdText.length;
    
    let remainingCharacters = maxAllowedChars - enterdTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    }
    else if(remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    }
    else{
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input',updateRemainingCharacters );
