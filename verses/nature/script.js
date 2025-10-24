document.addEventListener('DOMContentLoaded', () => {
    const leavesContainer = document.querySelector('.leaves-container');
    const numberOfLeaves = 30; // Adjust the number of leaves

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');

        // Random horizontal position
        leaf.style.left = `${Math.random() * 100}vw`;

        // Random animation duration
        const fallDuration = Math.random() * 5 + 5; // 5 to 10 seconds
        leaf.style.animationDuration = `${fallDuration}s`;

        // Random animation delay
        const fallDelay = Math.random() * 5; // 0 to 5 seconds
        leaf.style.animationDelay = `${fallDelay}s`;

        // Different leaf colors by changing the SVG fill color
        const colors = ['#6a994e', '#a7c957', '#fbbf24', '#e5989b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        leaf.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 0 C0 50 0 50 50 100 C100 50 100 50 50 0 Z" fill="${encodeURIComponent(color)}"/></svg>')`;

        // Random size
        const size = Math.random() * 10 + 10; // 10px to 20px
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;

        leavesContainer.appendChild(leaf);

        // Remove leaf from DOM after it falls
        setTimeout(() => {
            leaf.remove();
        }, (fallDuration + fallDelay) * 1000);
    }

    // Generate leaves periodically
    for(let i = 0; i < numberOfLeaves; i++) {
        createLeaf();
    }

    // Create new leaves continuously
    setInterval(createLeaf, 2000);
});
