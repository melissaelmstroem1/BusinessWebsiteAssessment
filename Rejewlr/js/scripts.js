let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Loop back to first slide

    slides[slideIndex - 1].style.display = "block"; // Show current slide

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Load navbar dynamically
function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Error loading navbar:', err));
}

// Call the function
includeNavbar();

