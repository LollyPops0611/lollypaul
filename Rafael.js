// JavaScript to toggle hidden hobbies
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-hobbies");
    const hiddenHobbies = document.querySelectorAll(".hidden-hobby");
    let isExpanded = false;

    toggleButton.addEventListener("click", () => {
        isExpanded = !isExpanded;
        hiddenHobbies.forEach(hobby => {
            hobby.style.display = isExpanded ? "list-item" : "none";
        });
        toggleButton.textContent = isExpanded ? "Show Less" : "Show More";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Functionality
    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggleButton.textContent =
            document.body.classList.contains("dark-theme")
                ? "Switch to Light Theme"
                : "Switch to Dark Theme";
    });

    // Highlight Profile Picture on Click
    const profilePhoto = document.getElementById("profile-photo");
    profilePhoto.addEventListener("click", () => {
        profilePhoto.classList.add("highlighted");
        setTimeout(() => {
            profilePhoto.classList.remove("highlighted");
        }, 1000); // Highlight lasts for 1 second
    });

    // Toggle Hidden Hobbies
    const toggleHobbiesButton = document.getElementById("toggle-hobbies");
    const hiddenHobbies = document.querySelectorAll(".hidden-hobby");
    let isExpanded = false;

    toggleHobbiesButton.addEventListener("click", () => {
        isExpanded = !isExpanded;
        hiddenHobbies.forEach((hobby) => {
            hobby.style.display = isExpanded ? "list-item" : "none";
        });
        toggleHobbiesButton.textContent = isExpanded ? "Show Less" : "Show More";
    });
});
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const options = { timeZone: 'Asia/Manila', timeZoneName: 'short' };
    const now = new Date().toLocaleString('en-PH', options);
    dateTimeElement.textContent = `Current Time: ${now}`;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initialize the time immediately on page load
updateDateTime();
