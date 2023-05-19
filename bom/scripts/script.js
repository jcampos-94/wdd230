const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const item = input.value;
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    li.appendChild(span);
    span.textContent = item;
    li.appendChild(deleteButton);
    deleteButton.textContent = "❌";
    ul.appendChild(li);
    
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });
    
    input.focus();
    input.value = '';
});