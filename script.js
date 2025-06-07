document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  const logo = document.getElementById("site-logo");
  const rsvpForm = document.getElementById("rsvp-form");

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    logo.src = isDarkMode ? logo.dataset.dark : logo.dataset.light;
  };

  themeButton.addEventListener("click", toggleDarkMode);

  const rsvpContainer = document.querySelector(".rsvp-container");
  const rsvpParticipants = document.querySelector(".rsvp-participants");

  let count = 3;

  const addParticipant = (event) => {
    event.preventDefault();

    const username = document.getElementById("name").value.trim();
    const college = document.getElementById("college").value.trim();

    if (!username || !college) {
      alert("Please type in your MC username and which college you are in!");
      return;
    }

    // Add new participant to participants div
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `📣 ${username} from ${college} has joined the game`;
    rsvpParticipants.appendChild(newParticipant);

    // Remove old count
    const oldCount = document.getElementById("rsvp-count");
    if (oldCount) oldCount.remove();

    // Increase count
    count = count + 1;

    // Create new count element
    const newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "⛏️" + count + " people dare to dash!";

    // Insert new count above participants list (below .rsvp-para)
    const rsvpPara = document.querySelector(".rsvp-para");
    rsvpContainer.insertBefore(newCount, rsvpParticipants);

    rsvpForm.reset();
  };

  rsvpForm.addEventListener("submit", addParticipant);

  // ✅ Scroll Animations Section

  // Step 1: Select all elements with the class 'revealable'.
  let revealableContainers = document.querySelectorAll(".revealable");

  // Step 2: Write function to reveal elements when they are in view.
  const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
      let current = revealableContainers[i];

      // Get current height of container and window
      let windowHeight = window.innerHeight;
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

      // If the container is within range, add the 'active' class to reveal
      if (topOfRevealableContainer < windowHeight - revealDistance) {
        revealableContainers[i].classList.add("active");
      }
      // If the container is not within range, hide it by removing the 'active' class
      else {
        revealableContainers[i].classList.remove("active");
      }
    }
  };

  // Step 3: Whenever the user scrolls, check if any containers should be revealed
  window.addEventListener("scroll", reveal);
});


/*** Scroll Animations ***
  Purpose:
  - Use this starter code to add scroll animations to your website.
***/


// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = TODO;


// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let current = revealableContainers[i];


    // Get current height of container and window
    let windowHeight = TODO;
    let topOfRevealableContainer = TODO;
    let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);


    // If the container is within range, add the 'active' class to reveal
    if (topOfRevealableContainer < windowHeight - revealDistance) {
      TODO;
    }
    // If the container is not within range, hide it by removing the 'active' class
    else {
      TODO;
    };
    reveal();  // run once on load

  }
}


// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener(TODO, TODO);
