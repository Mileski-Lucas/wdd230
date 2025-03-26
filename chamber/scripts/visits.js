const visitsDisplay = document.querySelector(".visits");
const messageDisplay = document.querySelector(".message");

// Retrieve number of visits and the last visit date
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
const lastVisit = Number(localStorage.getItem("lastVisit-ls")) || 0;
const currentVisit = Date.now();

if (numVisits === 0) {
  messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const timeDifference = currentVisit - lastVisit;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  if (daysDifference < 1) {
    messageDisplay.textContent = "Back so soon! Awesome!";
  } else {
    const dayText = daysDifference === 1 ? "day" : "days";
    messageDisplay.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
  }
}

visitsDisplay.textContent = numVisits + 1;

// Update localStorage with the latest values
localStorage.setItem("numVisits-ls", numVisits + 1);
localStorage.setItem("lastVisit-ls", currentVisit);