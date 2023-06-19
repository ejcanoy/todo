import sidebar from "./sidebar";
import { header, today } from "./header";
import article from "./article";
import footer from "./footer";

const body = () => {
    const containerElmt = document.createElement("div");
    containerElmt.classList.add("container");

    return containerElmt;
}

export default body;

