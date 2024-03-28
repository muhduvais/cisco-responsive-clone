// hide footer links
const arrowDown1 = document.querySelector('.arrow-down1');
const arrowDown2 = document.querySelector('.arrow-down2');
const hiddenLinks1 = document.querySelector('.hidden-links1');
const hiddenLinks2 = document.querySelector('.hidden-links2');

arrowDown1.addEventListener('click', function () {
    hiddenLinks1.classList.toggle('hidden');
} );

arrowDown2.addEventListener('click', function () {
    hiddenLinks2.classList.toggle('hidden');
} );

// help button
const helpBtn = document.querySelector('.help');
const hiddenContainer = document.querySelector('.hidden-container');
const xMark = document.querySelector('.fa-xmark');

helpBtn.addEventListener('click', function () {
    hiddenContainer.classList.add('isVisible');
    hiddenContainer.classList.remove('notVisible');
});

xMark.addEventListener('click', function () {
    hiddenContainer.classList.add('notVisible');
    hiddenContainer.classList.remove('isVisible');
});