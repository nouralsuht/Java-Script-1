function joinClub() {
  // Ask for the user's name.
  let userName = prompt("Enter your name:");

  // Ask for the membership type.
  let membership = prompt(
    "Enter your membership type: student or regular"
  );

  // Display the appropriate welcome message.
  if (membership === "student") {
    alert("Welcome Scholar " + userName);
  } else if (membership === "regular") {
    alert("Welcome Member " + userName);
  } else {
    alert("Welcome " + userName);
  }

  // Ask for the preferred genre.
  let genre = prompt("Do you prefer fiction or non-fiction?");

  // Ask for the book title.
  let bookTitle = prompt(
    "Enter the title of the book you want to borrow:"
  );

  // Display a reservation message.
  alert('Your requested book "' + bookTitle + '" is being reserved.');

  // Print the details in the browser console.
  console.log(userName + " requested the book: " + bookTitle);
  console.log("Preferred genre: " + genre);
}