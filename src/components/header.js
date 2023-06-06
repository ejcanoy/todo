import Plus from "./assets/plus.svg";

export const header = () => {
  const headerElmt = document.createElement("header");
  headerElmt.classList.add("header");
  headerElmt.classList.add("reminders-header");

  const buttonCtnElmt = document.createElement("div");
  buttonCtnElmt.classList.add("button-container");

  const buttonElmt = document.createElement("button");
  const plusElmt = new Image();
  plusElmt.src = Plus;
  plusElmt.classList.add("plus-icon");
  buttonElmt.appendChild(plusElmt);


  buttonCtnElmt.appendChild(buttonElmt);
  headerElmt.appendChild(buttonCtnElmt);

  const headerTextContainerElmt = document.createElement("div");
  headerTextContainerElmt.classList.add("header-text-container");

  const title = document.createElement("span");
  title.innerHTML = "Reminders";
  headerTextContainerElmt.appendChild(title);

  const number = document.createElement("span");
  number.classList.add("number");
  number.innerHTML = "17";
  headerTextContainerElmt.appendChild(number);

  headerElmt.appendChild(headerTextContainerElmt);

  return headerElmt;
};

export const today = () => {
  const headerElmt = document.createElement("header");
  headerElmt.classList.add("header");
  headerElmt.classList.add("today-header");
  headerElmt.innerText = "Today";
  return headerElmt;
};
