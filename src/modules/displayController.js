// reload page

import RemindersController from "./remindersController";
import body from "../components/body";
import { header } from "../components/header";
import sidebar from "../components/sidebar";
import article from "../components/article";
import footer from "../components/footer";
import { compareAsc, isBefore, parse, format } from "date-fns";
import ListedBullet from "../components/assets/format-list-bulleted.svg";
import Close from "../components/assets/close.svg";

export default class DisplayController {
  constructor() {
    this.remindersController = new RemindersController();
  }

  initialRenderPage() {
    this.loadPageComponents();
    const allButton = document.querySelector(".all-button.todo");
    allButton.classList.add("active");
    this.renderPage();
  }

  renderPage() {
    this.loadButtonCounts();
    this.loadLists();
    this.loadHeaderTitle();
    this.loadListAndTodos();
    this.loadEventListeners();
  }

  loadEventListeners() {
    const headerAddTodoButton = document.querySelector(
      ".button-container button"
    );
    headerAddTodoButton.addEventListener("click", () => this.loadTodoForm());

    const addListButton = document.querySelector(".add-list-button");
    addListButton.addEventListener("click", () => this.loadListForm());

    const todoButtons = [".today-button", ".scheduled-button", ".all-button"];
    todoButtons.forEach((buttonClass) => {
      const curButton = document.querySelector(buttonClass);
      curButton.addEventListener("click", (e) => this.renderActiveTab(e));
    });

    // const listButtons = document.querySelectorAll(".list-buttons");
    // listButtons.forEach((list) => {
    //   list.addEventListener("click", (e) => this.renderActiveTab(e));
    // });

    const removeListButtons = document.querySelectorAll(".remove-list-button");
    // removeListButtons.forEach((button) => {
      
    //   button.addEventListener("click", (e) => {
    //     e.stopPropagation();
    //     this.removeList(e)});
    // });
  }

  removeList(e) {
    console.log("removing");
    const clickedButton = e.target;
    let listName;
    if (clickedButton.tagName === "IMG") {
      listName = clickedButton.parentNode.parentNode.parentNode.querySelector(".list-name").innerHTML;
    } else {
      listName = clickedButton.parentNode.parentNode.querySelector(".list-name").innerHTML;
    }
    this.remindersController.removeList(listName);

    const activeButton = document.querySelector(".active");
    console.log(activeButton);
    if (
      !(activeButton.classList.contains("all-button") ||
      activeButton.classList.contains("today-button") ||
      activeButton.classList.contains("scheduled-button"))
    ) {
      const allButton = document.querySelector(".all-button").click();
    }
    
    this.renderPage();
  

    // find the parentNode
      // get the listname
      // remove the list using the reminderController
      // click on the render active tab button
  }

  removeTodo(e) {
    let clickedTodo;
    if (e.target.tagName === "IMG") {
      clickedTodo = e.target.parentNode.parentNode;
    } else {
      clickedTodo = e.target.parentNode;
    }

    let listName;
    let todoTitle = clickedTodo.querySelector(".li-todo-title").innerText;
    console.log(clickedTodo.querySelector(".li-todo-date"));
    let date =
      clickedTodo.querySelector(".li-todo-date") !== null
        ? clickedTodo.querySelector(".li-todo-date").innerText
        : "";
    let notes =
      clickedTodo.querySelector(".li-todo-notes") !== null
        ? clickedTodo.querySelector(".li-todo-notes").innerText
        : "";
    const activeButton = document.querySelector(".active");
    if (activeButton.classList.contains("all-button")) {
      listName =
        clickedTodo.parentNode.parentNode.querySelector("h4").innerText;
    } else if (activeButton.classList.contains("scheduled-button")) {
      const getDate = document.querySelector(".list-name").innerText;
      date = clickedTodo.parentNode.parentNode.querySelector("h4").innerText;
      const convertedDate = parse(date, "MMMM d, yyyy", new Date());
      date = format(convertedDate, "MM/dd/yy");
      listName = document.querySelector(".list-name").innerText;
      console.log(date);
    } else if (activeButton.classList.contains("today-button")) {
      listName = document.querySelector(".list-name").innerText;
      date = date.substring(3, date.length);
    } else {
      listName = document.querySelector(".header-title").innerText;
    }

    this.remindersController.removeTodo(listName, todoTitle, notes, date);
    this.renderPage();
  }

  renderActiveTab(e) {
    // console.log(e.target);
    if (e.target.classList.contains("close-button-icon") || e.target.classList.contains("remove-list-button")) {
      // right now just click on reminders so we make progress
      this.removeList(e)

      // figure out logic on how to get the next element or move it to all
      return;

    }
    const curActiveButton = document.querySelector(".active");
    console.log(curActiveButton);
    if (!(curActiveButton === e.target || curActiveButton.contains(e.target))) {
      this.highlightActiveTab(e);
      this.loadHeaderTitle();
      this.loadListAndTodos();
    }
  }

  highlightActiveTab(e) {
    const clickedButton = e.target;
    const categoryButtons = document.querySelectorAll("button.todo");
    categoryButtons.forEach((category) => {
      category.classList.remove("active");
      if (category === clickedButton || category.contains(e.target)) {
        category.classList.add("active");
      }
    });

    const listButtons = document.querySelectorAll(".list-buttons");
    listButtons.forEach((list) => {
      list.classList.remove("active");
      if (list === clickedButton || list.contains(e.target)) {
        list.classList.add("active");
      }
    });
  }

  loadTodoForm() {
    if (document.querySelector(".new-todo-form") !== null) {
      return;
    }
    const curListElmt = document.querySelector(".todo-list ul");

    const newTodoliElmt = document.createElement("li");
    newTodoliElmt.classList.add("new-todo-form");

    const todoFormContainerElmt = document.createElement("div");
    todoFormContainerElmt.classList.add("todo-form-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("round-checkbox");

    const titleDivElmt = document.createElement("div");
    titleDivElmt.classList.add("new-title-div");
    const titleInputElmt = document.createElement("input");
    titleInputElmt.classList.add("new-title-todo");
    titleDivElmt.appendChild(titleInputElmt);

    const notesDivElmt = document.createElement("div");
    notesDivElmt.classList.add("new-notes-div");
    const notesInputElmt = document.createElement("input");
    notesInputElmt.placeholder = "Notes";
    notesInputElmt.classList.add("new-notes-todo");
    notesDivElmt.appendChild(notesInputElmt);

    const calendarDivElmt = document.createElement("div");
    calendarDivElmt.classList.add("new-calendar-div");

    const calendarButton = document.createElement("input");
    calendarButton.classList.add("new-calendar-todo");
    calendarButton.type = "date";
    calendarDivElmt.appendChild(calendarButton);

    const buttonsContainerElmt = document.createElement("div");
    buttonsContainerElmt.classList.add("new-buttons-div");
    const submitButtonElmt = document.createElement("button");
    submitButtonElmt.classList.add("new-submit-todo");
    submitButtonElmt.innerText = "Submit";
    const cancelButtonElmt = document.createElement("button");
    cancelButtonElmt.classList.add("new-cancel-todo");
    cancelButtonElmt.innerText = "Cancel";
    buttonsContainerElmt.appendChild(submitButtonElmt);
    buttonsContainerElmt.appendChild(cancelButtonElmt);

    newTodoliElmt.appendChild(checkbox);

    todoFormContainerElmt.appendChild(titleDivElmt);
    todoFormContainerElmt.appendChild(notesDivElmt);
    todoFormContainerElmt.appendChild(calendarDivElmt);
    todoFormContainerElmt.appendChild(buttonsContainerElmt);
    newTodoliElmt.appendChild(todoFormContainerElmt);
    curListElmt.appendChild(newTodoliElmt);

    titleInputElmt.focus();

    // event listeners
    cancelButtonElmt.addEventListener("click", () => this.removeTodoForm());

    submitButtonElmt.addEventListener("click", () => this.addTodo());
  }

  addTodo() {
    // this.remindersController.addTodo()
    const todoValues = this.getTodoFormValues();
    this.remindersController.createTodo(
      todoValues.listName,
      todoValues.returnedDate,
      todoValues.title,
      todoValues.notes
    );
    this.removeTodoForm();
    this.renderPage();
    // add the new todo in the form
    // reload rerender page?
  }

  getTodoFormValues() {
    const activeButton = document.querySelector(".active");

    let listName;
    if (
      activeButton.classList.contains("all-button") ||
      activeButton.classList.contains("scheduled-button") ||
      activeButton.classList.contains("today-button")
    ) {
      const listNameElmt = document.querySelector(".todo-list h4");
      if (listNameElmt === null) {
        listName = "Reminders";
      } else {
        listName = listNameElmt.innerHTML;
      }
    } else {
      const listNameElmt = document.querySelector(".header-title");
      listName = listNameElmt.innerHTML;
    }

    // if scheduled have to default to today
    // const currentDate = new Date().toISOString().split("T")[0];
    // dateInput.value = currentDate;
    const title = document.querySelector(
      ".new-todo-form input.new-title-todo"
    ).value;
    const notes = document.querySelector(
      ".new-todo-form input.new-notes-todo"
    ).value;
    const date = document.querySelector(
      ".new-todo-form input[type='date']"
    ).value;
    let returnedDate;
    if (date !== "") {
      const parsedDate = parse(date, "yyyy-MM-dd", new Date());
      returnedDate = format(parsedDate, "MM/dd/yyyy");
    } else {
      returnedDate = date;
    }
    return { listName, title, notes, returnedDate };
  }

  removeTodoForm() {
    const newTodoFormElmt = document.querySelector(".new-todo-form");
    newTodoFormElmt.remove();
  }

  loadListForm() {
    console.log(this.remindersController.getAll());
    if (this.remindersController.getAll().getList("New List")) {
      return;
    }
    if (document.querySelector(".new-list-input") !== null) {
      return;
    }
    const myListsElmt = document.querySelector(".my-lists");

    // create new list
    this.remindersController.createList();

    const curActiveButton = document.querySelector(".active");
    curActiveButton.classList.remove("active");

    // this.renderActiveTab();
    // make sure that it is active and hidden

    // create hidden node

    const hiddenListDiv = document.createElement("div");
    hiddenListDiv.style.display = "none";

    const hiddenListButtonElmt = document.createElement("button");
    hiddenListButtonElmt.classList.add("list-buttons");
    hiddenListButtonElmt.classList.add("hidden");

    const hiddenLeftListPanelElmt = document.createElement("div");
    hiddenLeftListPanelElmt.classList.add("left-list-panel");
    const hiddenListCircleElmt = document.createElement("div");
    const hiddenInboxIcon = document.createElement("img");
    hiddenInboxIcon.classList.add("todo-icons");
    hiddenInboxIcon.src = ListedBullet;
    hiddenListCircleElmt.appendChild(hiddenInboxIcon);
    hiddenListCircleElmt.classList.add("circle");
    hiddenListCircleElmt.classList.add("circle-lists");
    hiddenLeftListPanelElmt.appendChild(hiddenListCircleElmt);

    const hiddenListName = document.createElement("span");
    hiddenListName.classList.add("list-name");
    hiddenListName.innerText = "New List";
    // hiddenListButtonElmt.classList.add("active");
    hiddenLeftListPanelElmt.appendChild(hiddenListName);
    hiddenListButtonElmt.appendChild(hiddenLeftListPanelElmt);


    const removeButtonContainer = document.createElement("div");
    removeButtonContainer.classList.add("remove-list-button-container");
    const removeButton = document.createElement("button");
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("close-button-icon");
    removeIcon.src = Close;
    removeButton.appendChild(removeIcon);
    removeButton.classList.add("remove-list-button");
    removeButtonContainer.appendChild(removeButton);
    hiddenListButtonElmt.appendChild(removeButtonContainer);

    const hiddenListNumber = document.createElement("div");
    hiddenListNumber.classList.add("list-number");
    hiddenListNumber.innerText = "0";
    hiddenListButtonElmt.appendChild(hiddenListNumber);

    hiddenListDiv.appendChild(hiddenListButtonElmt);
    myListsElmt.appendChild(hiddenListDiv);

    // create the form

    const listDiv = document.createElement("div");
    const listButtonElmt = document.createElement("div");
    listButtonElmt.classList.add("list-buttons");
    listButtonElmt.classList.add("list-form");
    listButtonElmt.classList.add("active");

    // listButtonElmt.disabled = true;

    const leftListPanelElmt = document.createElement("div");
    leftListPanelElmt.classList.add("left-list-panel");
    const listCircleElmt = document.createElement("div");
    const inboxIcon = document.createElement("img");
    inboxIcon.classList.add("todo-icons");
    inboxIcon.src = ListedBullet;
    listCircleElmt.appendChild(inboxIcon);
    listCircleElmt.classList.add("circle");
    listCircleElmt.classList.add("circle-lists");
    leftListPanelElmt.appendChild(listCircleElmt);

    const inputSpan = document.createElement("span");
    const listName = document.createElement("span");
    listName.innerHTML = "New List";
    listName.classList.add("list-name");
    listName.style.display = "none";
    inputSpan.appendChild(listName);
    // listName.classList.add("list-name");
    const newListInput = document.createElement("input");
    newListInput.placeholder = "New List";
    newListInput.classList.add("new-list-input");

    // const buttonsDiv = document.createElement("div");
    // const saveButton = document.createElement("button");
    // saveButton.innerText = "Y";
    // saveButton.classList.add("save-button");
    // const closeButton = document.createElement("button");
    // closeButton.classList.add("list-close");
    // closeButton.innerText = "x";
    // buttonsDiv.appendChild(saveButton);
    // buttonsDiv.appendChild(closeButton);

    const listNumber = document.createElement("div");
    listNumber.style.display = "none";
    listNumber.classList.add("list-number");
    listNumber.innerText = "0";
    listButtonElmt.appendChild(listNumber);

    inputSpan.appendChild(newListInput);
    leftListPanelElmt.appendChild(inputSpan);
    listButtonElmt.appendChild(leftListPanelElmt);
    // listButtonElmt.appendChild(buttonsDiv);
    listDiv.appendChild(listButtonElmt);
    myListsElmt.appendChild(listDiv);
    newListInput.focus();

    hiddenListButtonElmt.addEventListener("click", (e) =>
      this.renderActiveTab(e)
    );
    // closeButton.addEventListener("click", () => this.removeList());
    newListInput.addEventListener("blur", () => this.removeInput());
    newListInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.removeInput();
      }
    });

    this.loadHeaderTitle();
    this.loadListAndTodos();
    // create the list
    // hide it
    // when updating name
    // display:block the elemt
  }

  removeInput() {
    const inputValue = document.querySelector(".new-list-input").value;
    if (inputValue !== "") {
      this.updateList(inputValue);
    }
    const hiddenButton = document.querySelector(".hidden");
    hiddenButton.parentNode.removeAttribute("style");
    hiddenButton.click();
    hiddenButton.classList.remove("hidden");
    if (document.querySelector(".list-form").parentNode) {
      document.querySelector(".list-form").parentNode.remove();
    }
  }

  updateList(inputValue) {
    if (this.remindersController.getAll().getList(inputValue)) {
      // alert("Cannot Create Duplicate List!");
      return;
    }
    this.remindersController.updateList("New List", inputValue);
    const hiddenButton = document.querySelector(".hidden");
    hiddenButton.querySelector(".list-name").innerText = inputValue;
  }

  addList() {}

  loadPageComponents() {
    const curBody = body();
    curBody.appendChild(header());
    curBody.appendChild(sidebar());
    curBody.appendChild(article());
    curBody.appendChild(footer());
    document.body.appendChild(curBody);
  }

  loadButtonCounts() {
    const curAll = this.remindersController.getAll();

    const todayNumber = document.querySelector(
      ".todo.today-button .todo-number"
    );
    const scheduledNumber = document.querySelector(
      ".todo.scheduled-button .todo-number"
    );
    const allNumber = document.querySelector(".all-button.todo .todo-number");

    const currentDate = new Date();

    let todayCount = 0;
    let scheduledCount = 0;
    let allCount = 0;

    curAll.getLists().forEach((curList) => {
      const curListTodos = curList.getTodos();
      allCount += curListTodos.length;

      curListTodos.forEach((curTodo) => {
        const todoDate = curTodo.getDate();
        if (todoDate !== "") {
          const parsedTodoDate = parse(todoDate, "MM/dd/yyyy", new Date());
          if (isBefore(parsedTodoDate, currentDate)) {
            todayCount++;
          }
          scheduledCount++;
        }
      });
    });

    todayNumber.innerHTML = todayCount;
    scheduledNumber.innerHTML = scheduledCount;
    allNumber.innerHTML = allCount;
  }

  loadLists() {
    const curAll = this.remindersController.getAll();
    const myListsElmt = document.querySelector(".my-lists");
    let curActiveButtonName;

    const childNodes = myListsElmt.childNodes;
    for (let i = childNodes.length - 1; i > 0; i--) {
      const childNode = childNodes[i];
      const buttonElement = childNode.querySelector("button");
      if (buttonElement.classList.contains("active")) {
        curActiveButtonName = childNode.querySelector(".list-name").innerHTML;
      }
      myListsElmt.removeChild(childNode);
    }

    curAll.getLists().forEach((curList) => {
      const curListTodos = curList.getTodos();

      const listDiv = document.createElement("div");

      const listButtonElmt = document.createElement("button");
      listButtonElmt.classList.add("list-buttons");

      const leftListPanelElmt = document.createElement("div");
      leftListPanelElmt.classList.add("left-list-panel");
      const listCircleElmt = document.createElement("div");
      const inboxIcon = document.createElement("img");
      inboxIcon.classList.add("todo-icons");
      inboxIcon.src = ListedBullet;
      listCircleElmt.appendChild(inboxIcon);
      listCircleElmt.classList.add("circle");
      listCircleElmt.classList.add("circle-lists");
      leftListPanelElmt.appendChild(listCircleElmt);

      const listName = document.createElement("span");
      listName.classList.add("list-name");
      listName.innerText = curList.getName();
      if (curList.getName() === curActiveButtonName) {
        listButtonElmt.classList.add("active");
      }
      leftListPanelElmt.appendChild(listName);
      listButtonElmt.appendChild(leftListPanelElmt);

      // remove button
      const removeButtonContainer = document.createElement("div");
      removeButtonContainer.classList.add("remove-list-button-container");
      const removeButton = document.createElement("button");
      const removeIcon = document.createElement("img");
      removeIcon.classList.add("close-button-icon");
      removeIcon.src = Close;
      removeButton.appendChild(removeIcon);
      removeButton.classList.add("remove-list-button");
      removeButtonContainer.appendChild(removeButton);
      listButtonElmt.appendChild(removeButtonContainer);

      

      const listNumber = document.createElement("div");
      listNumber.classList.add("list-number");
      listNumber.innerText = curListTodos.length;
      listButtonElmt.appendChild(listNumber);

      listDiv.appendChild(listButtonElmt);
      myListsElmt.appendChild(listDiv);
      listButtonElmt.addEventListener("click", (e) => this.renderActiveTab(e));
    });
  }

  loadHeaderTitle() {
    const headerTextContainer = document.querySelector(
      ".header-text-container"
    );

    const headerClasses = Array.from(headerTextContainer.classList);

    headerClasses.forEach((className) => {
      if (className !== "header-text-container") {
        headerTextContainer.classList.remove(className);
      }
    });

    const activeButton = document.querySelector(".active");
    let todoTitleElmt = activeButton.querySelector(".todo-title");
    let todoText;

    if (todoTitleElmt === null) {
      const todoNumber = activeButton.querySelector(".list-number").innerHTML;
      headerTextContainer.querySelector(".number").innerText = todoNumber;
      todoText = activeButton.querySelector(".list-name").innerText;
      headerTextContainer.classList.add("reminders");
    } else {
      todoText = todoTitleElmt.innerHTML;
      headerTextContainer.classList.add(todoText.toLowerCase());

      const todoNumber = activeButton.querySelector(".todo-number").innerHTML;
      headerTextContainer.querySelector(".number").innerText =
        todoText !== "All" ? todoNumber : "";
    }

    headerTextContainer.querySelector("span").innerText = todoText;
    headerTextContainer.querySelector("span").classList.add("header-title");
  }

  loadListAndTodos() {
    const articleElmt = document.querySelector(".article");
    articleElmt.innerHTML = "";
    const activeButton = document.querySelector(".active");
    if (activeButton.classList.contains("all-button")) {
      this.loadAllTodos();
    } else if (activeButton.classList.contains("scheduled-button")) {
      this.loadScheduledTodos();
    } else if (activeButton.classList.contains("today-button")) {
      this.loadTodayTodos();
    } else {
      this.loadListTodos();
    }
  }

  loadListTodos() {
    const articleElmt = document.querySelector(".article");
    const activeButton = document.querySelector(".active");
    const listName = activeButton.querySelector(".list-name").innerHTML;

    const curAll = this.remindersController.getAll();
    const curList = curAll.getList(listName);

    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todo-list");
    const todoList = document.createElement("ul");
    this.appendTodoListItems(curList.getTodos(), todoList);
    todoListContainer.appendChild(todoList);
    articleElmt.appendChild(todoListContainer);
  }

  loadTodayTodos() {
    // get the todos from before today
    const articleElmt = document.querySelector(".article");
    const curAll = this.remindersController.getAll();
    const todaysTodos = [];

    curAll.getLists().forEach((curList) => {
      curList.getTodos().forEach((todo) => {
        const curDate = todo.getDate();
        if (curDate !== "") {
          const parsedDate = parse(curDate, "MM/dd/yyyy", new Date());
          const currentDate = new Date();
          if (isBefore(parsedDate, currentDate)) {
            todaysTodos.push(todo);
          }
        }
      });
    });

    const sortedTodos = todaysTodos.sort((a, b) => {
      const dateA = parse(a.date, "MM/dd/yyyy", new Date());
      const dateB = parse(b.date, "MM/dd/yyyy", new Date());
      return compareAsc(dateA, dateB);
    });

    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todo-list");
    const todoList = document.createElement("ul");
    this.appendTodoListItems(sortedTodos, todoList, false, true);
    todoListContainer.appendChild(todoList);
    articleElmt.appendChild(todoListContainer);
  }

  loadScheduledTodos() {
    const articleElmt = document.querySelector(".article");
    const curAll = this.remindersController.getAll();
    const dates = {};

    curAll.getLists().forEach((curList) => {
      curList.getTodos().forEach((todo) => {
        const curDate = todo.getDate();
        if (curDate !== "") {
          if (dates.hasOwnProperty(curDate)) {
            dates[curDate].push(todo);
          } else {
            dates[curDate] = [todo];
          }
        }
      });
    });

    const sortedKeys = Object.keys(dates).sort((a, b) => {
      const dateA = parse(a, "MM/dd/yyyy", new Date());
      const dateB = parse(b, "MM/dd/yyyy", new Date());
      return compareAsc(dateA, dateB);
    });

    sortedKeys.forEach((date) => {
      const todoListContainer = document.createElement("div");
      todoListContainer.classList.add("todo-list");
      const parsedDate = parse(date, "MM/dd/yyyy", new Date());
      const formattedDate = format(parsedDate, "MMMM d, yyyy");
      const listTitle = document.createElement("h4");
      listTitle.innerText = formattedDate;

      todoListContainer.appendChild(listTitle);
      const todoList = document.createElement("ul");

      this.appendTodoListItems(dates[date], todoList, true, false);

      todoListContainer.appendChild(todoList);
      articleElmt.appendChild(todoListContainer);
    });
  }

  loadAllTodos() {
    const articleElmt = document.querySelector(".article");
    const curAll = this.remindersController.getAll();

    curAll.getLists().forEach((curList) => {
      const todoListContainer = document.createElement("div");
      todoListContainer.classList.add("todo-list");

      const listTitle = document.createElement("h4");
      listTitle.innerText = curList.getName();

      todoListContainer.appendChild(listTitle);
      const todoList = document.createElement("ul");

      this.appendTodoListItems(curList.getTodos(), todoList, false, false);

      todoListContainer.appendChild(todoList);
      articleElmt.appendChild(todoListContainer);
    });
  }

  appendTodoListItems(todos, todoList, isScheduled, isToday) {
    if (todos.length === 0) {
      todoList.innerHTML = "No Reminders";
    }
    todos.forEach((curTodo) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const todoTitleElmt = document.createElement("span");
      todoTitleElmt.classList.add("li-todo-title");
      todoTitleElmt.innerText = curTodo.getTitle();
      label.appendChild(todoTitleElmt);

      if (curTodo.getNotes() !== "") {
        label.appendChild(document.createElement("br"));
        const notesElmt = document.createElement("span");
        notesElmt.classList.add("li-todo-notes");
        notesElmt.innerText = curTodo.getNotes();
        label.appendChild(notesElmt);
      }

      if (isScheduled) {
        label.appendChild(document.createElement("br"));
        const listNameElmt = document.createElement("span");
        listNameElmt.classList.add("li-todo-list-name");
        listNameElmt.innerText = curTodo.getList();
        label.appendChild(listNameElmt);
      } else if (curTodo.getDate() !== "") {
        label.appendChild(document.createElement("br"));
        const dateElmt = document.createElement("span");
        if (isToday) {
          const listNameElmt = document.createElement("span");
          listNameElmt.classList.add("li-todo-list-name");
          listNameElmt.innerText = curTodo.getList();

          const dashedDateElmt = document.createElement("span");
          dashedDateElmt.classList.add("li-todo-date");
          dashedDateElmt.innerText = ` - ${curTodo.getDate()}`;
          dateElmt.appendChild(listNameElmt);
          dateElmt.appendChild(dashedDateElmt);
        } else {
          dateElmt.classList.add("li-todo-date");
          dateElmt.innerText = curTodo.getDate();
        }
        label.appendChild(dateElmt);
      }

      const line = document.createElement("span");
      line.classList.add("label-line");

      label.appendChild(line);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("round-checkbox");
      if (curTodo.getCompleted()) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      checkbox.addEventListener("click", (e) => this.completeTodo(e));

      const removeButtonElmt = document.createElement("button");
      removeButtonElmt.classList.add("close-button");
      const removeIcon = document.createElement("img");
      removeIcon.classList.add("close-button-icon");
      removeIcon.src = Close;
      removeButtonElmt.appendChild(removeIcon);
      removeButtonElmt.addEventListener("click", (e) => this.removeTodo(e));

      li.appendChild(checkbox);
      li.appendChild(label);
      li.append(removeButtonElmt);

      todoList.appendChild(li);
    });
  }
  completeTodo(e) {

    const clickedTodo = e.target.parentNode;
    let listName;
    let todoTitle = clickedTodo.querySelector(".li-todo-title").innerText;
    let date =
      clickedTodo.querySelector(".li-todo-date") !== null
        ? clickedTodo.querySelector(".li-todo-date").innerText
        : "";
    let notes =
      clickedTodo.querySelector(".li-todo-notes") !== null
        ? clickedTodo.querySelector(".li-todo-notes").innerText
        : "";
    const activeButton = document.querySelector(".active");
    if (activeButton.classList.contains("all-button")) {
      listName =
        clickedTodo.parentNode.parentNode.querySelector("h4").innerText;
    } else if (activeButton.classList.contains("scheduled-button")) {
      const getDate = document.querySelector(".list-name").innerText;
      date = clickedTodo.parentNode.parentNode.querySelector("h4").innerText;
      const convertedDate = parse(date, "MMMM d, yyyy", new Date());
      date = format(convertedDate, "MM/dd/yy");
      listName = document.querySelector(".list-name").innerText;
      console.log(date);
    } else if (activeButton.classList.contains("today-button")) {
      listName = document.querySelector(".list-name").innerText;
      date = date.substring(3, date.length);
    } else {
      listName = document.querySelector(".header-title").innerText;
    }

    this.remindersController.completeTodo(listName, todoTitle, notes, date);
    // console.log(listName, todoTitle, notes, date);
    
    // if all get h4
    
    // today get list-name || scheduled get list-name

    //


    
    // label = e.target.nextElementSibling;

    // figure out how to get the listNmae


    // const listName = label.querySelector("li-todo-title") ? label.querySelector("li-todo-title") : "";
    // const todoTitle = label.querySelector("li-todo-t") ? 
    // const notes = 
    // const date = 
    // // date = date.substring(3, date.length);
    // this.remindersController.completeTodo(listName, todoTitle, notes, date);
    // console.log(this.remindersController);
  }
}



// displayController
// load all components
// load all event listeners here
// return values from list form
// return values from todo form
// remindersController
// addTodo -> title, date, note
// removeTodo -> title
// addList -> name
// removeList -> name
// update todo -> title, category, value
// update list ->
// dataAccessLayer
// loadData() -> load loacalStorage all to all
// saveData() -> save curAll to localStorage

// click on add list

// handle the clicks
// if click on today highlight tab and load today
// if click on schedule highlight tab and load schedule
// if click on all highlight tab and load all
// figure out how to dynamically create each reminder!
// if add list load modal
// when modal is submitted add data to list
// if click on plus button load modal to enter in details
// when modal is submitted create new todo and add that to all[list];
