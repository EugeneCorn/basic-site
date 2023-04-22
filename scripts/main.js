const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dev-ops-logo.png") {
        myImage.setAttribute("src", "images/dev-ops-logo2.png");
    } else {
        myImage.setAttribute("src", "images/dev-ops-logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        alert("Please, enter the user name.")
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `DevOps is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `DevOps is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}