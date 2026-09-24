/* ============================================================
   Мобильное меню
   ============================================================ */
(function () {
var burger = document.querySelector('.burger');
var menu   = document.getElementById('mobile-menu');
if (!burger || !menu) return;

var root = document.documentElement;
var body = document.body;

function open() {
    root.classList.add('is-menu-open');
    body.classList.add('is-menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
}

function close() {
    root.classList.remove('is-menu-open');
    body.classList.remove('is-menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
}

burger.addEventListener('click', function () {
    body.classList.contains('is-menu-open') ? close() : open();
});

menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('is-menu-open')) {
    close();
    burger.focus();
    }
});

var mq = window.matchMedia('(min-width: 801px)');
mq.addEventListener('change', function (e) {
    if (e.matches) close();
});
})();