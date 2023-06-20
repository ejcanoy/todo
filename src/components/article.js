const article = () => {
    const articleElmt = document.createElement("article");
    // articleElmt.appendChild(noReminders());
    // articleElmt.appendChild(remindItems());
    // articleElmt.appendChild(remindItems());
    // articleElmt.appendChild(remindItems());
    // articleElmt.appendChild(remindItems());
    // articleElmt.appendChild(remindItems());
    

    articleElmt.classList.add("article");
    return articleElmt;
}

const remindItems = () => {
    // const todoListContainer = document.createElement('div');
    // todoListContainer.classList.add("todo-list");

    // const listTitle = document.createElement("h4");
    // listTitle.innerText = "Name 0";

    // todoListContainer.appendChild(listTitle);

    // const todoList = document.createElement('ul');
    
    // const todoItems = [
    //   'Schema',
    //   'Figure out hosting',
    //   'Task 3'
    // ];
    
    // todoItems.forEach(function(item) {
    //   const li = document.createElement('li');
    
    //   const label = document.createElement('label');
    //   label.textContent = item;
    
    //   const line = document.createElement('span');
    //   line.classList.add('label-line'); 
    
    //   label.appendChild(line);
    
    //   const checkbox = document.createElement('input');
    //   checkbox.type = 'checkbox';
    //   checkbox.classList.add('round-checkbox');
    
    //   li.appendChild(checkbox);
    //   li.appendChild(label);
    
    //   todoList.appendChild(li);
    // });
    
    // todoListContainer.appendChild(todoList);
    return todoListContainer;

}

const noReminders = () => {
    const noRemindersElmt = document.createElement("div");
    noRemindersElmt.classList.add("no-reminders")
    noRemindersElmt.innerText = "No Reminders";

    return noRemindersElmt;
}

export default article