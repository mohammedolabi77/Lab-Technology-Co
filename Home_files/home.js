// js for slider start

// slider home bage start
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const numberofslide = slides.length;
var slideNumber = 1;
// manual btns sliding
        var manualnav = function (manual) {
            slides.forEach((slide) => {
                slide.classList.remove('active');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
        });
            slides[manual].classList.add('active');
            btns[manual].classList.add('active');
        }
        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualnav(i);
                currentslide = i;
            });
        });
//image slider next btn
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slideNumber++;
    if (slideNumber > (numberofslide - 1)) {
        slideNumber = 1;
    }
    slides[slideNumber].classList.add("active");
    btns[slideNumber].classList.add("active");
});
//image slider prev btn
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
        btns.forEach((btn) => {
            btn.classList.remove("active");
    });
    slideNumber--;
    if (slideNumber < 1) {
        slideNumber = numberofslide - 1;
    }
    slides[slideNumber].classList.add("active");
    btns[slideNumber].classList.add("active");
});
//auto slide
var playslider;
var repeater = () => {
    palyslider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        slideNumber++;
        if (slideNumber > (numberofslide - 1)) {
            slideNumber = 1;
        }
        slides[slideNumber].classList.add("active");
        btns[slideNumber].classList.add("active");
    },8000);
}
repeater();
