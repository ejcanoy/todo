const footer = () => {
    const footerElmt = document.createElement("footer");
    footerElmt.classList.add("footer");

    const footerContainerElmt = document.createElement("div");
    footerContainerElmt.classList.add("footer-container");

    const footerContentElmt = document.createElement("span");
    const footerAnchorElmt = document.createElement("a");
    footerAnchorElmt.innerText = "Copyright @ 2023 ejcanoy";
    footerAnchorElmt.href = "https://github.com/ejcanoy";
    footerAnchorElmt.target = "_blank"


    footerContentElmt.appendChild(footerAnchorElmt);
    footerContainerElmt.appendChild(footerContentElmt);

    footerElmt.appendChild(footerContainerElmt);
    return footerElmt;
}

export default footer