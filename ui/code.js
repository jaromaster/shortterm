// selected todo
let currentTodo = 0;

// handle click on todo
const handleClick = (todoNumber) => {
    currentTodo = todoNumber;
    showDialog();
}

// set value of todo and close dialog
const handleSubmit = () => {
    const data = document.getElementById("edittext").value;
    document.getElementById("todo"+String(currentTodo)).innerText = data;
    
    const editDialog = document.getElementById("editDialog");
    editDialog.close();
}

// display dialog (as modal)
const showDialog = () => {
    const editDialog = document.getElementById("editDialog");
    editDialog.showModal();

    document.getElementById("edittext").value = document.getElementById("todo"+String(currentTodo)).innerText;
}