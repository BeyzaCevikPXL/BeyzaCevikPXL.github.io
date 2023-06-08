/*loading*/
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.display = 'block';
});


/*navbar scroll*/
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 0;

    navbar.classList.toggle('scrolled', scrolled);
});

/*navbar opened*/
function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('opened');
    if (navbar.classList.contains('opened')) {
        navbar.style.backgroundColor = '#A5ADB0';
    } else {
        navbar.style.backgroundColor = '';
    }
}

/*scrol button*/
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollButton").style.display = "block";
    } else {
        document.getElementById("scrollButton").style.display = "none";
    }
}

