import CalendarBlank from "./assets/calendar-blank.svg";
import CalendarMonth from "./assets/calendar-month.svg";
import Inbox from "./assets/inbox.svg";
import Plus from "./assets/plus.svg";

const sidebar = () => {
  const sidebarElmt = document.createElement("div");
  sidebarElmt.classList.add("sidebar");
  sidebarElmt.appendChild(logoContainer());
  sidebarElmt.appendChild(todoCategory());
  sidebarElmt.appendChild(myLists());
  sidebarElmt.appendChild(addListButton());

  return sidebarElmt;
};

const logoContainer = () => {
  const logoContainerElmt = document.createElement("div");
  logoContainerElmt.classList.add("logo-container");

  const inputLogo = document.createElement("input");
  inputLogo.placeholder = "Apple Reminders Clone";
  logoContainerElmt.appendChild(inputLogo);
  return logoContainerElmt;
}

const todoCategory = () => {
  const todoCategoryContainer = document.createElement("div");
  todoCategoryContainer.classList.add("todo-category-container");

  const todayButtonElmt = document.createElement("button");
  todayButtonElmt.classList.add("todo");
  todayButtonElmt.classList.add("today-button");

  const todayCircleElmt = document.createElement("div");
  const calendarBlankIcon = document.createElement("img");
  calendarBlankIcon.classList.add("todo-icons");
  calendarBlankIcon.id = "calendar-blank";
  calendarBlankIcon.src = CalendarBlank;
  todayCircleElmt.appendChild(calendarBlankIcon);
  todayCircleElmt.classList.add("circle");
  todayCircleElmt.classList.add("circle-today");
  todayButtonElmt.appendChild(todayCircleElmt);

  const todayNumberElmt = document.createElement("div");
  todayNumberElmt.classList.add("todo-number");
  todayButtonElmt.appendChild(todayNumberElmt);

  const todayTitleElmt = document.createElement("div");
  todayTitleElmt.classList.add("todo-title");
  todayTitleElmt.innerText = "Today";
  todayButtonElmt.appendChild(todayTitleElmt);

  todoCategoryContainer.appendChild(todayButtonElmt);

  const scheduledButtonElmt = document.createElement("button");
  scheduledButtonElmt.classList.add("todo");
  scheduledButtonElmt.classList.add("scheduled-button");

  const scheduledCircleElmt = document.createElement("div");
  const calendarMonthIcon = document.createElement("img");
  calendarMonthIcon.classList.add("todo-icons");
  calendarMonthIcon.id = "calendar-month";
  calendarMonthIcon.src = CalendarMonth;
  scheduledCircleElmt.appendChild(calendarMonthIcon);
  scheduledCircleElmt.classList.add("circle");
  scheduledCircleElmt.classList.add("circle-scheduled");
  scheduledButtonElmt.appendChild(scheduledCircleElmt);

  const scheduledNumberElmt = document.createElement("div");
  scheduledNumberElmt.classList.add("todo-number");
  scheduledButtonElmt.appendChild(scheduledNumberElmt);

  const scheduledTitleElmt = document.createElement("div");
  scheduledTitleElmt.classList.add("todo-title");
  scheduledTitleElmt.innerText = "Scheduled";
  scheduledButtonElmt.appendChild(scheduledTitleElmt);

  todoCategoryContainer.appendChild(scheduledButtonElmt);

  const allButtonElmt = document.createElement("button");
  allButtonElmt.classList.add("all-button");
  allButtonElmt.classList.add("todo");

  const allCircleElmt = document.createElement("div");
  const inboxIcon = document.createElement("img");
  inboxIcon.src = CalendarBlank;
  inboxIcon.classList.add("todo-icons");
  inboxIcon.id = "inbox";
  inboxIcon.src = Inbox;
  allCircleElmt.appendChild(inboxIcon);
  allCircleElmt.classList.add("circle");
  allCircleElmt.classList.add("circle-all");
  allButtonElmt.appendChild(allCircleElmt);

  const allNumberElmt = document.createElement("div");
  allNumberElmt.classList.add("todo-number");
  allButtonElmt.appendChild(allNumberElmt);

  const allTitleElmt = document.createElement("div");
  allTitleElmt.classList.add("todo-title");
  allTitleElmt.innerText = "All";
  allButtonElmt.appendChild(allTitleElmt);

  todoCategoryContainer.appendChild(allButtonElmt);
  return todoCategoryContainer;
}

const myLists = () => {
  // create mylists
  const myListsContainerElmt = document.createElement("div");
  myListsContainerElmt.classList.add("my-lists");

  const myListsTitleElmt = document.createElement("div");
  myListsTitleElmt.classList.add("my-lists-title");
  myListsTitleElmt.innerText = "My Lists";
  myListsContainerElmt.appendChild(myListsTitleElmt);


  return myListsContainerElmt;
};

const addListButton = () => {
    // add list button
    const addListButtonElmt = document.createElement("button");
    addListButtonElmt.classList.add("add-list-button");
  
    const leftListPanelElmt = document.createElement("div");
    leftListPanelElmt.classList.add("left-list-panel");
    const listCircleElmt = document.createElement("div");
    const plusIcon = document.createElement("img");
    plusIcon.classList.add("todo-icons");
    plusIcon.classList.add("add-list-icon");
    plusIcon.src = Plus;
    listCircleElmt.appendChild(plusIcon);
    listCircleElmt.classList.add("circle");
    listCircleElmt.classList.add("circle-add-list");
    leftListPanelElmt.appendChild(listCircleElmt);
  
    const listName = document.createElement("span");
    listName.classList.add("add-list-text");
    listName.innerText = "Add List";
    leftListPanelElmt.appendChild(listName);
    addListButtonElmt.appendChild(leftListPanelElmt);
    return addListButtonElmt;
}

export default sidebar;
