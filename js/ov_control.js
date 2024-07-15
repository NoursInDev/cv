document.addEventListener('click', function() {
    var intro = document.getElementById('intro');
    if (intro) {
        intro.style.opacity = '0';
        setTimeout(function() {
            intro.style.display = 'none';
        }, 200);
    }
}, { once: true });