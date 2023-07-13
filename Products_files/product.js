// btn show details


// chromato button start  //////////////////////////////////////////////////////////////////////////////////
function togglepopup11() {
    document.getElementById("popup-11").classList.toggle("active");
}
function togglepopup12() {
    document.getElementById("popup-12").classList.toggle("active");
}
function togglepopup13() {
    document.getElementById("popup-13").classList.toggle("active");
}
function togglepopup14() {
    document.getElementById("popup-14").classList.toggle("active");
}
function togglepopup15() {
    document.getElementById("popup-15").classList.toggle("active");
}
// chromato button end   ///////////////////////////////////////////////////////////////////////////////////


// pyisqal button start  //////////////////////////////////////////////////////////////////////////////////
function togglepopup21() {
    document.getElementById("popup-21").classList.toggle("active");
}
function togglepopup22() {
    document.getElementById("popup-22").classList.toggle("active");
}
function togglepopup23() {
    document.getElementById("popup-23").classList.toggle("active");
}
function togglepopup24() {
    document.getElementById("popup-24").classList.toggle("active");
}
function togglepopup25() {
    document.getElementById("popup-25").classList.toggle("active");
}

// phaysiql button end  //////////////////////////////////////////////////////////////////////////////////


// spectro button start  //////////////////////////////////////////////////////////////////////////////////
function togglepopup31() {
    document.getElementById("popup-31").classList.toggle("active");
}
function togglepopup32() {
    document.getElementById("popup-32").classList.toggle("active");
}
function togglepopup33() {
    document.getElementById("popup-33").classList.toggle("active");
}
function togglepopup34() {
    document.getElementById("popup-34").classList.toggle("active");
}
function togglepopup35() {
    document.getElementById("popup-35").classList.toggle("active");
}
// spector button end  //////////////////////////////////////////////////////////////////////////////////



// geniral button start  //////////////////////////////////////////////////////////////////////////////////
function togglepopup41() {
    document.getElementById("popup-41").classList.toggle("active");
}
function togglepopup42() {
    document.getElementById("popup-42").classList.toggle("active");
}
function togglepopup43() {
    document.getElementById("popup-43").classList.toggle("active");
}
function togglepopup44() {
    document.getElementById("popup-44").classList.toggle("active");
}
function togglepopup45() {
    document.getElementById("popup-45").classList.toggle("active");
}
function togglepopup46() {
    document.getElementById("popup-46").classList.toggle("active");
}
function togglepopup47() {
    document.getElementById("popup-47").classList.toggle("active");
}
function togglepopup48() {
    document.getElementById("popup-48").classList.toggle("active");
}
function togglepopup49() {
    document.getElementById("popup-49").classList.toggle("active");
}
function togglepopup410() {
    document.getElementById("popup-410").classList.toggle("active");
}
function togglepopup411() {
    document.getElementById("popup-411").classList.toggle("active");
}
function togglepopup412() {
    document.getElementById("popup-412").classList.toggle("active");
}
// geniral button end  //////////////////////////////////////////////////////////////////////////////////


// another machines button start  //////////////////////////////////////////////////////////////////////////////////
function togglepopup51() {
    document.getElementById("popup-51").classList.toggle("active");
}
function togglepopup52() {
    document.getElementById("popup-52").classList.toggle("active");
}
function togglepopup53() {
    document.getElementById("popup-53").classList.toggle("active");
}
function togglepopup54() {
    document.getElementById("popup-54").classList.toggle("active");
}
function togglepopup55() {
    document.getElementById("popup-55").classList.toggle("active");
}
// another machines button end  //////////////////////////////////////////////////////////////////////////////////

// img sliding start
const slider = document.querySelector(".slider");
const bigimgs = document.querySelectorAll(".bigimg");
const imgsbar = document.querySelectorAll(".imgbar");
const numberofslide = bigimgs.length;
var slideNumber = 1;

        var manualimg = function (manual) {
            bigimgs.forEach((bigimg) => {
                bigimg.classList.remove('active');
            imgsbar.forEach((imgbar) => {
                imgbar.classList.remove('active');
            });
        });
            bigimgs[manual].classList.add('active');
            imgsbar[manual].classList.add('active');
        } 
        imgsbar.forEach((imgbar, i) => {
            imgbar.addEventListener("click", () => {
                manualimg(i);
                currentimgbar = i;
            });
        });
