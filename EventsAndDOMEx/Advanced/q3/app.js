const displayText = document.querySelector("#displayText");

const boldBtn = document.querySelector("#boldBtn");
const italicBtn = document.querySelector("#italicBtn");

const leftBtn = document.querySelector("#leftBtn");
const centerBtn = document.querySelector("#centerBtn");
const rightBtn = document.querySelector("#rightBtn");

const upperBtn = document.querySelector("#upperBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const capitalizeBtn = document.querySelector("#capitalizeBtn");
const clearBtn = document.querySelector("#clearBtn");

const textColor = document.querySelector("#textColor");
const backgroundColor = document.querySelector("#backgroundColor");

const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");


// Bold
boldBtn.addEventListener("click", function () {

    if (displayText.style.fontWeight === "bold") {
        displayText.style.fontWeight = "normal";
    } else {
        displayText.style.fontWeight = "bold";
    }

});


// Italic
italicBtn.addEventListener("click", function () {

    if (displayText.style.fontStyle === "italic") {
        displayText.style.fontStyle = "normal";
    } else {
        displayText.style.fontStyle = "italic";
    }

});


// Alignment
leftBtn.addEventListener("click", function () {
    displayText.style.justifyContent = "flex-start";
    displayText.style.textAlign = "left";
});

centerBtn.addEventListener("click", function () {
    displayText.style.justifyContent = "center";
    displayText.style.textAlign = "center";
});

rightBtn.addEventListener("click", function () {
    displayText.style.justifyContent = "flex-end";
    displayText.style.textAlign = "right";
});


// Upper Case
upperBtn.addEventListener("click", function () {
    displayText.textContent =
        displayText.textContent.toUpperCase();
});


// Lower Case
lowerBtn.addEventListener("click", function () {
    displayText.textContent =
        displayText.textContent.toLowerCase();
});


// Capitalize
capitalizeBtn.addEventListener("click", function () {

    const words = displayText.textContent
        .toLowerCase()
        .split(" ");

    for (let i = 0; i < words.length; i++) {

        if (words[i] !== "") {

            words[i] =
                words[i][0].toUpperCase() +
                words[i].slice(1);
        }
    }

    displayText.textContent = words.join(" ");
});


// Clear Text
clearBtn.addEventListener("click", function () {
    displayText.textContent = "";
});


// Text Color
textColor.addEventListener("input", function () {
    displayText.style.color = textColor.value;
});


// Background Color
backgroundColor.addEventListener("input", function () {
    displayText.style.backgroundColor =
        backgroundColor.value;
});


// Font Size
fontSize.addEventListener("input", function () {

    displayText.style.fontSize =
        fontSize.value + "px";

});


// Font Family
fontFamily.addEventListener("change", function () {

    displayText.style.fontFamily =
        fontFamily.value;

});