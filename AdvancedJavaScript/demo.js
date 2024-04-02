let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event){
    let enterdText = event.target.value;
    let enterdTextLength = enterdText.length;
    
    let remainingCharacters = maxAllowedChars - enterdTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input',updateRemainingCharacters );
