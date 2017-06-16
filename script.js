const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem (e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing page
    const text = (this.querySelector('[name = item]')).value;
    const item = {
        text: text,
        done: false
    }
    this.reset(); // 'This' is the form element and it clears the form field
}

addItems.addEventListener('submit', addItem);
