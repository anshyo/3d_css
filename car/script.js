const car=document.querySelector('.car');
const btn1=document.querySelector('.r-1');
const btn2=document.querySelector('.r-2');
const btn3=document.querySelector('.r-3');

btn1.addEventListener('click', () => {
    car.classList.toggle('carrotatetop');
})
btn2.addEventListener('click', () => {
    car.classList.toggle('carrotateleft');
})
btn3.addEventListener('click', () => {
    car.classList.toggle('carrotatelefttop');
})