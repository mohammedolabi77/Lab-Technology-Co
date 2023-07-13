const slider = document.querySelector(".slider");
const showe = document.querySelectorAll(".sevcont");
const btn = document.querySelectorAll(".sevcontt");
const numberofslide = showe.length;
var slideNumber = 1;

        var manualimg = function (manual) {
            showe.forEach((sevcont) => {
                sevcont.classList.add('disact');
            btn.forEach((sevcontt) => {
                sevcontt.classList.add('disact');
            });
        },5000);
            showe[manual].classList.remove('disact');
            btn[manual].classList.remove('disact');
        }
        btn.forEach((sevcontt, i) => {
            sevcontt.addEventListener("click", () => {
                manualimg(i);
                currentsevcontt = i;
            });
        },5000);