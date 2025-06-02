/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// Step 1: Select the theme button

let themeButton = document.getElementById("theme-button");
let logo = document.getElementById("site-logo");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  // Write your code here
  // This section will run whenever the button is clicked
  document.body.classList.toggle("dark-mode");
  logo.src = isDarkMode ? logo.dataset.dark : logo.dataset.light;
}


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


themeButton.addEventListener("click", toggleDarkMode)



/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/



/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and state they
    entered should be added to the list of participants.
***/


// Step 1: Add your query for the submit RSVP button here


const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here


  event.preventDefault();
}


// Step 3: Add a click event listener to the submit RSVP button here
