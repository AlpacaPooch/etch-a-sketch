const container = document.querySelector('.container');
const clearButton = document.querySelector('#clear')
let clearContents = clearButton.addEventListener('click', () => {
    let test = document.getElementsByClassName('column');
    for (i = 0; i < test.length; i++) {
        test[i].setAttribute('id', '');
    }
});



let gridSize = prompt('Enter Grid size 16x16-64x64 (Enter 16-44)')

for (let i = 0; i <= gridSize; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', `row r${i + 1}`)
    container.appendChild(row)
    for (let c = 0; c <= gridSize; c++){
        const column = document.createElement('div');
        column.setAttribute('class', `column c${c + 1}`)
        row.appendChild(column) 
    }
}

let clicked = false;
let click = document.addEventListener('mousedown', (e) => {
    clicked = true;
});





let colorchange = document.addEventListener('mouseover', (e) => {
    let test = e.target;
    if (clicked == true) {
    test.setAttribute('id', 'black');
    };
});

let clickup = document.addEventListener('mouseup', (e) => {
    console.log(e);
    clicked = false;
});




