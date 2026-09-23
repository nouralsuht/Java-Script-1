// EX2

 function getMembershipType() {

    let membership = prompt(
        "Enter your membership type: student or regular"
    );

    while (membership !== "student" && membership !== "regular") {

        alert("Invalid membership type");

        membership = prompt(
            "Enter your membership type: student or regular"
        );
    }

    return membership;
}


 function collectUserData() {

    let userName = prompt("Enter your name:");

    let membership = getMembershipType();

    let genre = prompt(
        "Do you prefer fiction or non-fiction?"
    );

    let bookTitle = prompt(
        "Enter the title of the book you want to borrow:"
    );

    let userData = [
        userName,
        membership,
        genre,
        bookTitle
    ];

    return userData;
}


// EX3

 let availableGenres = [
    "Fiction",
    "Science",
    "History",
    "Biography"
];


 function applyDiscount(userData) {

    if (userData[1] === "student") {
        userData.push("20% Discount");
    } 
    else if (userData[1] === "regular") {
        userData.push("No Discount");
    }

    return userData;
}


 function addNewGenre(genre) {
    availableGenres.push(genre);
}


 function displayGenres() {

    for (let i = 0; i < availableGenres.length; i++) {
        console.log("- We offer: " + availableGenres[i]);
    }
}


 function joinClub() {

     let userData = collectUserData();

     userData = applyDiscount(userData);

     if (userData[1] === "student") {
        alert("Welcome Scholar " + userData[0]);
    } 
    else {
        alert("Welcome Member " + userData[0]);
    }

     alert(
        'Your requested book "' +
        userData[3] +
        '" is being reserved.'
    );

     console.log("User Data:");

    for (let i = 0; i < userData.length; i++) {
        console.log(userData[i]);
    }

     console.log("Available Genres:");

    displayGenres();
}

 