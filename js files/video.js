// video.js

document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("video-preloader");
    const preloaderVideo = document.getElementById("preloader-video");
    const contentSections = [
        document.getElementById("menu"),
        document.getElementById("stars"),
        document.getElementById("main")
    ];

    // Listen for the video to end
    preloaderVideo.addEventListener("ended", function() {
        preloader.style.transition = "opacity 1s ease";
        preloader.style.opacity = "0";

        // Delay to ensure the fade-out completes
        setTimeout(function() {
            preloader.style.display = "none";
            contentSections.forEach(section => {
                section.style.display = "block";
            });
        }, 1000);
    });
});
