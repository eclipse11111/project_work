const slides = [
    "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",

    "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg",

    "https://wallpapers.com/images/hd/nature-landscape-pictures-hg4ndx87jp1rsvth.jpg",

    "https://wallpaperaccess.com/full/442405.jpg",
    
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=cascade-clouds-cool-wallpaper-210186.jpg&fm=jpg"
];
let currentSlide = 0;
function showSlide(index) {
    document.getElementById("slide").src = slides[index];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

window.onload = function () {
    const lightTheme = document.getElementById("theme-light");
    const toggle = document.querySelector(".switch input");
    const icon = document.getElementById("theme-icon");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        lightTheme.disabled = false;
        toggle.checked = true;
        icon.src =
        "https://static.vecteezy.com/system/resources/previews/024/253/445/original/black-and-white-illustration-of-sun-icon-vector.jpg";
    }
    else {
        lightTheme.disabled = true;
        toggle.checked = false;
        icon.src =
        "https://w7.pngwing.com/pngs/929/127/png-transparent-computer-icons-graphy-encapsulated-postscript-quiet-moon-miscellaneous-photography-logo.png";
    }
};

function toggleTheme(el) {
    const lightTheme = document.getElementById("theme-light");
    const icon = document.getElementById("theme-icon");
    if (el.checked) {
        lightTheme.disabled = false;
        icon.src =
        "https://static.vecteezy.com/system/resources/previews/024/253/445/original/black-and-white-illustration-of-sun-icon-vector.jpg";
        localStorage.setItem("theme", "light");
    }
    else {
        lightTheme.disabled = true;
        icon.src =
        "https://w7.pngwing.com/pngs/929/127/png-transparent-computer-icons-graphy-encapsulated-postscript-quiet-moon-miscellaneous-photography-logo.png";
        localStorage.setItem("theme", "dark");
    }
}