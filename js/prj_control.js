document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});