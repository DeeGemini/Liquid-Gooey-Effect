// Page navigation tracking
let currentPage = 'home';

// Navigation items click handler
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        navigateToPage(page);
    });
});

// Function to handle page navigation with gooey transition
function navigateToPage(page) {
    const overlay = document.getElementById('transitionOverlay');
    const pageDisplay = document.getElementById('currentPage');
    
    // Show transition overlay
    overlay.classList.add('active');
    
    // Simulate page transition
    setTimeout(() => {
        currentPage = page;
        pageDisplay.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        
        // Hide overlay after transition
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 500);
    }, 1000);
}

// Trigger transition button
document.getElementById('triggerTransition').addEventListener('click', function() {
    const pages = ['home', 'about', 'services', 'contact'];
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    navigateToPage(pages[nextIndex]);
});

// Interactive blob container - add click effect
document.getElementById('blobContainer').addEventListener('click', function() {
    const blobs = this.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        setTimeout(() => {
            blob.style.transform = 'scale(1.5)';
            setTimeout(() => {
                blob.style.transform = 'scale(1)';
            }, 300);
        }, index * 100);
    });
});

// Gooey button click effect
document.querySelector('.gooey-button').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

// Add mouse move effect to blob container
document.getElementById('blobContainer').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const blobs = this.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const offsetX = (x - rect.width / 2) / 10 * (index + 1);
        const offsetY = (y - rect.height / 2) / 10 * (index + 1);
        blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Reset blob positions when mouse leaves
document.getElementById('blobContainer').addEventListener('mouseleave', function() {
    const blobs = this.querySelectorAll('.blob');
    blobs.forEach(blob => {
        blob.style.transform = 'translate(0, 0)';
    });
});

// Console message for demonstration
console.log('Liquid Gooey Effect initialized!');
console.log('Try interacting with the navigation, buttons, and blobs!');

// Initialize page display
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentPage').textContent = 
        currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
});
