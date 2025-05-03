document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const categoryDescriptions = document.querySelectorAll('.category-description');
    const orgGrids = document.querySelectorAll('.org-grid');
    const orgContentWrapper = document.querySelector('.org-content-wrapper');
    const bgClasses = ['cleanup-bg', 'advocacy-bg', 'research-bg', 'education-bg', 'innovation-bg'];

    // Helper to set the correct background class
    function setOrgBg(tabCategory) {
        orgContentWrapper.classList.remove(...bgClasses);
        if (tabCategory && orgContentWrapper) {
            orgContentWrapper.classList.add(`${tabCategory}-bg`);
        }
    }

    // Initialize the content wrapper with the active tab's color
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        const tabCategory = activeTab.getAttribute('data-tab');
        setOrgBg(tabCategory);
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabCategory = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs, descriptions, and grids
            tabs.forEach(t => t.classList.remove('active'));
            categoryDescriptions.forEach(desc => desc.classList.remove('active'));
            orgGrids.forEach(grid => grid.classList.remove('active'));
            
            // Add active class to selected tab, description, and grid
            tab.classList.add('active');
            document.getElementById(`${tabCategory}-desc`).classList.add('active');
            document.getElementById(`${tabCategory}-grid`).classList.add('active');
            setOrgBg(tabCategory);
        });
    });

    // Rotating Stats
    function rotateStats() {
        const stats = document.querySelectorAll('.stat-slide');
        let currentIndex = 0;

        function showNextStat() {
            stats.forEach(stat => {
                stat.classList.remove('active');
            });
            
            currentIndex = (currentIndex + 1) % stats.length;
            stats[currentIndex].classList.add('active');
        }

        // Initial state
        stats[0].classList.add('active');
        
        // Rotate every 5 seconds
        setInterval(showNextStat, 5000);
    }

    rotateStats();
}); 