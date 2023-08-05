const btn = document.getElementsByClassName('move_to_top')[0];
const btnid = document.getElementById('up_btn');

function scrollUp() {
    if (window.pageYOffset > 350) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}
window.addEventListener('scroll', scrollUp);

function scollMover() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}
btnid.addEventListener('click', scollMover);