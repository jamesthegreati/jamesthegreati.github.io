const footer = document.querySelector('footer p');
const text = 'C:\\>_';
let i = 0;

function type() {
    if (i < text.length) {
        footer.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150);
    } else {
        // Blinking cursor
        setInterval(() => {
            footer.textContent = footer.textContent.endsWith('_') ? footer.textContent.slice(0, -1) : footer.textContent + '_';
        }, 500);
    }
}

window.onload = () => {
    footer.textContent = '';
    type();
};
