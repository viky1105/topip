function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let time = 5 * 60; // 5 minutes in seconds

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time === 0) {
            clearInterval(interval);
            countdownElement.textContent = "Time's up!";
        }

        time--;
    }, 1000);
}

function copyToClipboard() {
    const inputElement = document.getElementById('readonly-input');
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    } catch (err) {
        alert('Failed to copy text.');
    }

    window.getSelection().removeAllRanges(); // Deselect the text
}
