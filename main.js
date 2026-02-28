document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const mainContent = document.querySelector('.main-content');

            if (mainContent) {
                mainContent.style.transition = 'opacity 0.3s ease';
                mainContent.style.opacity = '0';
            }

            setTimeout(function() {
                window.location.href = 'http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=7155';
            }, 300);
        });
    }
});
