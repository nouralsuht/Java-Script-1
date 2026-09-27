// // EX2

//  function getMembershipType() {

//     let membership = prompt(
//         "Enter your membership type: student or regular"
//     );

//     while (membership !== "student" && membership !== "regular") {

//         alert("Invalid membership type");

//         membership = prompt(
//             "Enter your membership type: student or regular"
//         );
//     }

//     return membership;
// }


//  function collectUserData() {

//     let userName = prompt("Enter your name:");

//     let membership = getMembershipType();

//     let genre = prompt(
//         "Do you prefer fiction or non-fiction?"
//     );

//     let bookTitle = prompt(
//         "Enter the title of the book you want to borrow:"
//     );

//     let userData = [
//         userName,
//         membership,
//         genre,
//         bookTitle
//     ];

//     return userData;
// }


// // EX3

//  let availableGenres = [
//     "Fiction",
//     "Science",
//     "History",
//     "Biography"
// ];


//  function applyDiscount(userData) {

//     if (userData[1] === "student") {
//         userData.push("20% Discount");
//     } 
//     else if (userData[1] === "regular") {
//         userData.push("No Discount");
//     }

//     return userData;
// }


//  function addNewGenre(genre) {
//     availableGenres.push(genre);
// }


//  function displayGenres() {

//     for (let i = 0; i < availableGenres.length; i++) {
//         console.log("- We offer: " + availableGenres[i]);
//     }
// }


//  function joinClub() {

//      let userData = collectUserData();

//      userData = applyDiscount(userData);

//      if (userData[1] === "student") {
//         alert("Welcome Scholar " + userData[0]);
//     } 
//     else {
//         alert("Welcome Member " + userData[0]);
//     }

//      alert(
//         'Your requested book "' +
//         userData[3] +
//         '" is being reserved.'
//     );

//      console.log("User Data:");

//     for (let i = 0; i < userData.length; i++) {
//         console.log(userData[i]);
//     }

//      console.log("Available Genres:");

//     displayGenres();
// }

 // Available Genres Array
let availableGenres = [
    "Fiction",
    "Science",
    "History",
    "Biography",
    "Non-fiction"
];


// Student/User data Array
let userData = [];


// Select Elements
const form = document.querySelector("#club-form");

const usernameInput = document.querySelector("#username");
const membershipInput = document.querySelector("#membership");
const genreInput = document.querySelector("#genre");
const bookTitleInput = document.querySelector("#bookTitle");

const resultCard = document.querySelector("#result-card");

const usernameError = document.querySelector("#username-error");
const membershipError = document.querySelector("#membership-error");
const genreError = document.querySelector("#genre-error");
const bookError = document.querySelector("#book-error");

const joinButtons = document.querySelectorAll(".join-button");


// Move to the form
for (let i = 0; i < joinButtons.length; i++) {

    joinButtons[i].addEventListener("click", function () {

        document.querySelector("#join").scrollIntoView({
            behavior: "smooth"
        });

        usernameInput.focus();
    });
}


// Validate Form
function validateForm() {

    let isValid = true;


    // Username Validation
    if (usernameInput.value.trim() === "") {

        usernameError.textContent =
            "Username is required";

        isValid = false;

    } else {

        usernameError.textContent = "";
    }


    // Membership Validation
    if (
        membershipInput.value !== "student" &&
        membershipInput.value !== "regular"
    ) {

        membershipError.textContent =
            "Please select student or regular";

        isValid = false;

    } else {

        membershipError.textContent = "";
    }


    // Genre Validation
    if (genreInput.value === "") {

        genreError.textContent =
            "Please select a book genre";

        isValid = false;

    } else {

        genreError.textContent = "";
    }


    // Book Validation
    if (bookTitleInput.value.trim() === "") {

        bookError.textContent =
            "Book title is required";

        isValid = false;

    } else {

        bookError.textContent = "";
    }


    return isValid;
}


// Discount Function
function applyDiscount(userData) {

    if (userData[1] === "student") {

        return "20% Student Discount";
    }

    return "No Discount";
}


// Render User Data
function renderUserData(userData) {

    const discount = applyDiscount(userData);


    // Clear old result
    resultCard.innerHTML = "";


    // Main Container
    const content = document.createElement("div");

    content.classList.add("result-content");


    // Icon
    const icon = document.createElement("div");

    icon.classList.add("result-icon");

    icon.innerHTML = '<i class="bi bi-check-lg"></i>';


    // Heading
    const heading = document.createElement("h3");

    if (userData[1] === "student") {

        heading.textContent =
            "Welcome Scholar " + userData[0] + "!";

    } else {

        heading.textContent =
            "Welcome Member " + userData[0] + "!";
    }


    content.append(icon);
    content.append(heading);


    // Labels
    const labels = [
        "Username",
        "Membership",
        "Book Genre",
        "Book Title"
    ];


    // Loop through Array
    for (let i = 0; i < userData.length; i++) {

        const row = document.createElement("div");

        row.classList.add("result-row");


        const label = document.createElement("span");

        const value = document.createElement("span");


        label.textContent = labels[i];

        value.textContent = userData[i];


        row.append(label, value);

        content.append(row);
    }


    // Discount
    const discountText = document.createElement("div");

    discountText.classList.add("discount");

    discountText.textContent = discount;


    content.append(discountText);

    resultCard.append(content);
}


// Submit Event
form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Check validation
    if (!validateForm()) {

        return;
    }


    // Get Input Values
    const username = usernameInput.value.trim();

    const membershipType =
        membershipInput.value;

    const bookGenre =
        genreInput.value;

    const bookTitle =
        bookTitleInput.value.trim();


    // Store Data in Array
    userData = [
        username,
        membershipType,
        bookGenre,
        bookTitle
    ];


    // Display Data
    renderUserData(userData);


    // Clear Form
    form.reset();


    // Focus Username
    usernameInput.focus();
});


// Remove Error While Typing
usernameInput.addEventListener("input", function () {

    if (usernameInput.value.trim() !== "") {

        usernameError.textContent = "";
    }
});


bookTitleInput.addEventListener("input", function () {

    if (bookTitleInput.value.trim() !== "") {

        bookError.textContent = "";
    }
});


membershipInput.addEventListener("change", function () {

    if (
        membershipInput.value === "student" ||
        membershipInput.value === "regular"
    ) {

        membershipError.textContent = "";
    }
});


genreInput.addEventListener("change", function () {

    if (genreInput.value !== "") {

        genreError.textContent = "";
    }
});


// Focus username when page loads
usernameInput.focus();