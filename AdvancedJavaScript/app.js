let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event){
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data; // this is differnt
    console.log(enteredText);
    // console.log(event)
}

inputElement.addEventListener('input', retrieveUserInput);