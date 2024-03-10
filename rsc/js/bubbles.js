let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');

let cv = document.getElementById('cv');

let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b10 = document.getElementById('b10');
let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');

let tbprofile = document.getElementById('tbprofile');

cv.style.opacity = 0

window.onload = function() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let scale = 1 + value * 0.0003;
    let blur = value * 0.01;
    let rayon = 10;
    let angle = (value - 3000) / (5*rayon); // Convertir la position de défilement en angle
    let x = rayon * Math.cos(angle); // Calculer la coordonnée x
    let y = rayon * Math.sin(angle); // Calculer la coordonnée y

    if (value < 2000) {
        tbprofile.style.transform = `scale(${scale})`;
        tbprofile.style.filter = `blur(${blur}px)`;
        b1.style.marginTop = value * -0.2 + 'px';
        b2.style.marginTop = value * -0.2 + 'px';
        b3.style.marginTop = value * -0.7 + 'px';
        b4.style.marginTop = value * -1.4 + 'px';
        b5.style.marginTop = value * -0.5 + 'px';
        if (cv.style.opacity > 0) {
            cv.style.opacity = 0
        }
    }

    if (value > 2000 && value < 3000) {
        cv.style.opacity = (value - 2000 ) * 0.001
        cv.style.top = 0
    }



    if (value > 3000) {
        cv.style.top = -(value - 3000) + 'px'
    }

});