const roleText = document.getElementById("role-text");
const roles = ["Software Developer", "Cloud Practitioner"];
let currentRoleIndex = 0;

function toggleRole() {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    roleText.style.opacity= 0 // Fade out

    setTimeout(() =>{
        roleText.innerText = roles[currentRoleIndex]
        roleText.style.opacity =1 // Fade in

}, 2000)
}

setInterval(toggleRole, 4000);

const colors = ["red", "blue", "green", "purple","yellow"];
let currentIndex = 0;

function changeColor() {
    const fadeElement = document.getElementById("role-text");
    fadeElement.style.opacity = 0; // Start fading out

    setTimeout(() => {
        // Change color after fade out
        fadeElement.style.color = colors[currentIndex];
        fadeElement.style.opacity = 1; // Fade back in

        // Move to the next color, looping back to the start
        currentIndex = (currentIndex + 1) % colors.length;
    }, 2000); // Wait for fade-out duration (matches CSS transition duration)
}

// Change color every 2 seconds
setInterval(changeColor, 4000);

