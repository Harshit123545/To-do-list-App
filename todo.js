document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    if (todoText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(removeButton);
        document.getElementById('todo-list').appendChild(li);
        todoInput.value = '';
    }
});
