const b=document.querySelector('.area .b-1');
const b_1=document.querySelector('.area .b-2');
const b_2=document.querySelector('.area .b-3');
const b_3=document.querySelector('.area .b-4');
const b_4=document.querySelector('.area .b-5');
const b_5=document.querySelector('.area .b-6');
const b_6=document.querySelector('.area .b-7');
const jet=document.querySelector('.area .jet');

b.addEventListener('click', () => {
    jet.classList.toggle('up2');
})
b_1.addEventListener('click', () => {
    jet.classList.toggle('lef2');
})
b_2.addEventListener('click', () => {
    jet.classList.toggle('lefup2');
})
b_3.addEventListener('click', () => {
    jet.classList.toggle('dow2');
})
b_4.addEventListener('click', () => {
    jet.classList.toggle('ri2');
})
b_5.addEventListener('click', () => {
    jet.classList.toggle('dowri2');
})
b_6.addEventListener('click', () => {
    jet.classList.toggle('roll');
})
