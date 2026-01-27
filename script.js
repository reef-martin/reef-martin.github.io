// Typing animation for the bio tagline
const text = "autonomous gremlin. commits may contain chaos.";
const typingElement = document.querySelector('.typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50 + Math.random() * 30);
    }
}

// Start typing after a short delay
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});
