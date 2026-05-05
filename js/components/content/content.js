import sections from "./data.js";

function Content(sec) {
   
    return Array.from(sec).map((elem)=>`<section  ${elem.attrs} id="${elem.id}">
</section>`).join("")
}

document.getElementById("root").innerHTML = Content(sections);
