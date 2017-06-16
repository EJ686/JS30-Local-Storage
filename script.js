const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing page
    const text = (this.querySelector('[name = item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // 'This' is the form element and it clears the form field
};

function populateList (plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
};

function toggleDone (e) {
    if (!e.target.matches('input')) return; // skip this unless its an input
    console.log(e.target);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => alert ('hi')));

populateList(items, itemsList);
