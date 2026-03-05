const sections = Array.from(document.querySelectorAll('.section'));
const dots = Array.from(document.querySelectorAll('.dot'));
const btnBack = document.getElementById('btn-back');
const btnContinue = document.getElementById('btn-continue');
const btnViewWork = document.getElementById('btn-view-work');
const btnGetInTouch = document.getElementById('btn-get-in-touch');
const progressFill = document.getElementById('progress-fill');
const sectionCounter = document.getElementById('section-counter');

let current = 0;

function goTo(index) {
  if (index < 0 || index >= sections.length) return;

  sections[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = index;

  sections[current].classList.add('active');
  dots[current].classList.add('active');

  const progress = sections.length > 1
    ? (current / (sections.length - 1)) * 100
    : 100;
  progressFill.style.width = progress + '%';

  sectionCounter.textContent = (current + 1) + ' / ' + sections.length;

  btnBack.disabled = current === 0;
  btnContinue.disabled = current === sections.length - 1;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnBack.addEventListener('click', function () {
  goTo(current - 1);
});

btnContinue.addEventListener('click', function () {
  goTo(current + 1);
});

btnViewWork.addEventListener('click', function () {
  goTo(current + 1);
});

btnGetInTouch.addEventListener('click', function () {
  goTo(sections.length - 1);
});

dots.forEach(function (dot, i) {
  dot.addEventListener('click', function () {
    goTo(i);
  });
});

document.addEventListener('keydown', function (e) {
  const active = document.activeElement;
  const tag = active ? active.tagName : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    goTo(current + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    goTo(current - 1);
  }
});

goTo(0);
