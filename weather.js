let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let clouds = document.getElementById('clouds');
let texto = document.getElementById('texto');
let btn = document.getElementById('btn');


window.addEventListener('scroll', function(){

    let value = this.window.scrollY;
    this.stars.style.left = value * 0.25 + 'px';
    this.moon.style.top = value * 0.25 + 'px';
    this.texto.style.marginRight = value * 4 + 'px';
    this.texto.style.marginTop = value * 1.5 + 'px';
    this.btn.style.marginTop = value * 1.5 + 'px';
})