// Get the container for stars
const starsContainer = document.getElementById('stars');

// Function to generate random stars
function generateStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random positions and animation duration
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * 3 + 2; // Random duration between 2s to 5s
        const animationDelay = Math.random() * 5; // Random delay between 0s to 5s

        // Set star styles
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${animationDuration}s`;
        star.style.animationDelay = `${animationDelay}s`;

        // Add the star to the container
        starsContainer.appendChild(star);
    }
}

// Generate 200 stars
generateStars(200);

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Space exploration is a force of nature unto itself that no other force in society can rival. – Neil deGrasse Tyson",
        "Mankind's journey into space, like every great voyage of discovery, will become part of our unending journey of liberation. – Gopal Garg",
        "The universe is not only stranger than we imagine, it is stranger than we can imagine. – Sir Arthur Eddington",
        "That's one small step for man, one giant leap for mankind. – Neil Armstrong",
        "I am proud to be part of a species where a subset of its members willingly put their lives at risk to push the boundaries of our existence. – Neil deGrasse Tyson",
        "The conquest of space is worth the risk of life. – Virgil I. Grissom",
        "Space travel is life-enhancing, and anything that's life-enhancing is worth doing. – Ray Bradbury",
        "The universe is under no obligation to make sense to you. – Neil deGrasse Tyson",
        "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. – Konstantin Tsiolkovsky",
        "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself. – Carl Sagan"
    ];

    const quoteContainer = document.getElementById('quote-container');
    let currentQuoteIndex = 0;

    function typeQuote(quote) {
        return new Promise((resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                quoteContainer.textContent += quote[i];
                i++;
                if (i === quote.length) {
                    clearInterval(interval);
                    setTimeout(resolve, 2000); // Pause before deleting
                }
            }, 70);
        });
    }

    function deleteQuote() {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                quoteContainer.textContent = quoteContainer.textContent.slice(0, -1);
                if (quoteContainer.textContent.length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });
    }

    async function displayQuotes() {
        while (true) {
            const quote = quotes[currentQuoteIndex];
            await typeQuote(quote);
            await deleteQuote();
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }
    }

    displayQuotes();
});

function openPage(pageName, div) {
    if (!(div instanceof HTMLDivElement)) return;
    
    expandDiv(div);

    // for (let menuItem of document.getElementsByClassName("menu-item")) {
    //     if (menuItem != div) contractDiv(menuItem)
    // }
}

function expandDiv(div) {    
    if (!(div instanceof HTMLDivElement)) return;

    div.classList.add("open-page")

    document.getElementById("main").classList.add("hidden")

    div.children[0].classList.add("active-back")
    div.children[1].classList.add("hidden")
    div.children[2].classList.add("active-main")
}

function contractDiv(div, position) {
    setTimeout(() => {
        parent = div.parentElement
        console.log(parent.classList)
        parent.classList.remove("open-page")
        
        document.getElementById("main").classList.remove("hidden")
        
        parent.children[0].classList.remove("active-back")
        parent.children[1].classList.remove("hidden")
        parent.children[2].classList.remove("active-main")
    }, 100)
    
}