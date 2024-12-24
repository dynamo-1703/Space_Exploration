document.addEventListener('DOMContentLoaded', () => {
    const planetDivs = document.querySelectorAll('.banner .img');

    planetDivs.forEach(div => {
        div.addEventListener('click', () => {
            const infoDiv = div.querySelector('.info'); // Find info div inside the planet div

            // If already expanded, toggle back to normal state on a single click
            if (div.classList.contains('expanded')) {
                div.classList.remove('expanded');
                div.classList.remove('clicked');
                if (infoDiv) infoDiv.style.display = 'none'; // Hide info

                // Re-enable other planet divs
                planetDivs.forEach(d => {
                    if (d !== div) {
                        d.style.pointerEvents = 'auto';
                    }
                });
                return;
            }

            // If clicked but not expanded, expand it
            if (div.classList.contains('clicked')) {
                div.classList.add('expanded');
                if (infoDiv) infoDiv.style.display = 'block'; // Show info

                // Disable interaction on other planet divs
                planetDivs.forEach(d => {
                    if (d !== div) {
                        d.style.pointerEvents = 'none';
                    }
                });
                return;
            }

            // Add clicked class on the first click
            div.classList.add('clicked');
        });
    });
});
