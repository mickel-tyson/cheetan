document.addEventListener("DOMContentLoaded", () =>{
    const form= document.getElementById("todo-form");
    const input= document.getElementById("todo-input");
    const List= document.getElementById("todo-list");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const tasktext= input.value.trim();
        if(tasktext === '') return;
        const li= document.createElement("li");
        li.textContent= tasktext;
    
        li.addEventListener('click', () => {
            li.classList.toggle("completed");
});

  
    const deleteBtn= document.createElement("button");
    deleteBtn.textContent= "X";
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        li.remove();
    });

        li.appendChild(deleteBtn);

        List.appendChild(li);
      input.value= '';
    });
});