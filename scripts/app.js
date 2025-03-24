console.log('JS Loaded!');

const country = 'Canada';

// const name = 'Liam'.concat(' Stewart',' ', 123,' ', country);

// const name = 'Liam' + ' ' + 'Stewart' + ' ' + '123' + ' ' + country;

// const name = 123 + 123;

const number = 123;
const lastName = 'Stewart';

const name = `Liam ${lastName} ${number} ${country}`;

console.log(name);


// document getElementById Example:

let mainHeading = document.getElementById('myFirstHeading');
console.log(mainHeading);

mainHeading.textContent = 'Edited by JS!';

let firstPTag = document.querySelector('p');
let secondPTag = document.querySelector('.second');
console.log(firstPTag);
console.log(secondPTag);
firstPTag.style.color = 'red';

// queryselectorall example:

let allPtags = document.querySelectorAll('p');

console.log(allPtags);

let fruit = document.querySelectorAll('li');

console.log(fruit[0].textContent);

fruit.forEach(value => {
    value.style.color = 'orange';

    if (value.textContent === 'Green Apple') {
        value.style.color = 'green';
    }

    console.log(value.textContent);
});

console.log('Print classList');
console.log(secondPTag.classList);

mainHeading.classList.add('makeGreen');
secondPTag.classList.remove('second');
secondPTag.classList.remove('text-blue');

if (mainHeading.classList.contains('makeBlue')) {
    console.log('It is green!');
} else {
    console.log('does not contain blue class');
}

let myButton = document.querySelector('#coolButton');
console.log(myButton);

let count = 0;

function myCustomFunction() {
    console.log('It was clicked!');
    count++;

    if(count < 10) {
        console.log('Not yet!')
    } else {
        console.log('yay!');
        secondPTag.innerHTML = '<h2>helloooo</h2>';
    }

}

myButton.addEventListener('click', myCustomFunction)

document.querySelector('#myInput').addEventListener('input', function(e) {
    console.log(e.target.value);
});

let myButtons = document.querySelectorAll('button');

myButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('Button clicked!');
        console.log(event.target.textContent);
    });
});