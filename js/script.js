window.addEventListener('scroll', function() {
    const nav = document.querySelector('.custom-nav');
    nav.classList.toggle('sticky', window.scrollY > 100);
});