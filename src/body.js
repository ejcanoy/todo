import sidebar from "./components/sidebar";
import { header, today } from "./components/header";
import article from "./components/article";
import footer from "./footer";

const body = () => {
    const containerElmt = document.createElement("div");
    containerElmt.classList.add("container");

    containerElmt.appendChild(header());
    containerElmt.appendChild(sidebar());
    containerElmt.appendChild(article());
    containerElmt.appendChild(footer());

    return containerElmt;
}

export default body;

