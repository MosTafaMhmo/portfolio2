var slider = document.getElementsByClassName("slider")[0];
var slides = slider.children;
var bar = document.getElementsByClassName("bar")[0];
var circle = bar.children;
var left = document.getElementById("left");
var right = document.getElementById("right");





function select() {
    for (var i = 0; i < l; i++) {
        slides[i].classList.remove("active");
        circle[i].classList.remove("active");

        right.classList.remove("disable");
    }
    slides[view].classList.add("active");
    circle[view].classList.add("active");
    if (view == 0) {
        left.classList.add("disable");
    }
    else {
        left.classList.remove("disable");
    }
    if (view == (l - 1)) {
        right.classList.add("disable");
    }
    else {
        right.classList.remove("disable");
    }
}


var view = 2;
select();

var l = slides.length;
for (var i = 0; i < l; i++) {
    circle[i].onclick = function () {
        console.log(this.getAttribute("index"));
        view = this.getAttribute("index");
        select();
    };

}

left.onclick = function () {
    if (view !== 0) {
        view--;
        select();
    }
};

right.onclick = function () {
    if (view !== (l - 1)) {
        view++;
        select();
    }
};
