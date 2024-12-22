document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const introVideo = document.getElementById('intro-video');

    introVideo.addEventListener('ended', () => {
        videoContainer.classList.add('fade-out');
        setTimeout(() => {
            videoContainer.style.display = 'none';
            // Activate other elements if needed
        }, 1000); // Matches the fadeOut animation duration
    });
});
