document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const greetings = ['I build websites.', 'I create apps.', 'I develop cool things.'];

    let currentGreetingIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function updateDynamicText() {
        const currentGreeting = greetings[currentGreetingIndex];
        const currentText = currentGreeting.substring(0, currentCharIndex);

        greetingElement.innerHTML = `${currentText}<span class="typing-cursor"></span>`;

        if (isDeleting) {
            currentCharIndex--;
        } else {
            currentCharIndex++;
        }

        if (currentCharIndex === currentGreeting.length + 1) {
            isDeleting = true;
        }

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        }
    }

    // Update text every 100 milliseconds (adjust as needed)
    setInterval(updateDynamicText, 100);
});