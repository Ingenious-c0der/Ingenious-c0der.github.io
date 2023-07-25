// script.js

const logosContainer = document.querySelector(".logos-container");

// Array of logo image URLs
const logos = [
    "images/profile_pic.jpeg"
  // Add more logo URLs as needed
];

// Function to add logos to the container
function addLogos() {
  logos.forEach((logoURL) => {
    const logo = document.createElement("img");
    logo.src = logoURL;
    logo.alt = "Logo";
    logosContainer.appendChild(logo);

    // Randomly position the logos within the container
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    logo.style.left = `${randomX}%`;
    logo.style.top = `${randomY}%`;
  });
}

// Call the function to add logos on page load
addLogos();