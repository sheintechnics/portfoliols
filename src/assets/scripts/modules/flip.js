// document.querySelector("#myCard").classList.toggle("flip");

var btnFlip = document.getElementById('btnFlip');
var flipper = document.getElementById('flipper');

btnFlip.addEventListener('click', function() {
    flipper.classList.toggle('flip');
});