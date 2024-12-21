document.addEventListener("DOMContentLoaded", () => {
    // Find all slideshow containers
    const slideshows = document.querySelectorAll(".slideshow-container");

    slideshows.forEach((slideshow, index) => {
        let slideIndex = 1; // Start at the first slide for each slideshow
        const slides = slideshow.querySelectorAll(".Slide, .slide"); // Handle both "Slide" and "slide" classes
        const prevButton = slideshow.querySelector(".prev");
        const nextButton = slideshow.querySelector(".next");

        // Show the first slide initially
        showSlides(slideIndex);

        // Attach event listeners to navigation buttons
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                showSlides(--slideIndex);
            });
        }
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                showSlides(++slideIndex);
            });
        }

        // Function to display the current slide
        function showSlides(n) {
            if (n > slides.length) slideIndex = 1; // Wrap around to the first slide
            if (n < 1) slideIndex = slides.length; // Wrap around to the last slide

            slides.forEach((slide, i) => {
                slide.style.display = i === slideIndex - 1 ? "block" : "none";
            });
        }
    });
});
