//Selectors

let changeButton = document.getElementById("change");
//arrays
let bookDisplay = document.getElementsByClassName("book-display");
let book = document.getElementsByClassName("book");
let description = document.getElementsByClassName("description");
let title = document.getElementsByClassName("title");
let quote = document.getElementsByClassName("quote");
let author = document.getElementsByClassName("author");
let footer = document.getElementsByClassName("footer");
let conSetup = document.getElementsByClassName("consetup");
let star = document.getElementsByClassName("star");
let likes = document.getElementsByClassName("likes");
let more = document.getElementsByClassName("more");
let cover = document.getElementsByClassName("cover");
let img = document.getElementsByClassName("img");
let dropDown = document.getElementsByClassName("dropdown");
let dropDownContent = document.getElementsByClassName("dropdown-content");

//eventListener
changeButton.addEventListener("click", change);

let i;
 
function change() {

    //Changes icon and displays the top cell for list view
    if (changeButton.innerHTML == "view_list") {
        changeButton.innerHTML = "view_comfy";
        document.getElementById("topcell").style.display = "grid";
    } else {
        changeButton.innerHTML = "view_list";
        document.getElementById("topcell").style.display = "none";
    }

    //Toggles the Display class
    bookDisplay[0].classList.toggle("book-display-list");
    
    for (i in book) {

        book[i].classList.toggle("book-list");
        description[i].classList.toggle("description-list");
        title[i].classList.toggle("title-list");
        quote[i].classList.toggle("quote-list")
        author[i].classList.toggle("author-list");
        footer[i].classList.toggle("footer-list");
        conSetup[i].classList.toggle("con");
        star[i].classList.toggle("star-list");
        likes[i].classList.toggle("likes-list");
        more[i].classList.toggle("more-list");
        cover[i].classList.toggle("cover-list");
        img[i].classList.toggle("img-list");
        dropDown[i].classList.toggle("dropdown-list");
        dropDownContent[i].classList.toggle("dropdown-content-list");
    }
}