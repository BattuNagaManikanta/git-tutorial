let slides = document.querySelectorAll('.slider__slide');
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let slider = document.querySelector('.image-container')
let container = document.querySelector('.container');
let dots = document.querySelector('.dots');

console.log("version 13");

console.log(leftButton,rightButton);
let i = 0;

slides.forEach((_,o)=>{
  let sp = document.createElement('span');
  sp.classList.add('dot');
  dots.appendChild(sp);
  sp.addEventListener('click',(e)=>{handleDots(e,o)})
})

let spanDots = document.querySelectorAll('.dot');
spanDots[0].style.backgroundColor = 'black';

function handleDots(e,o){
    spanDots[i].style.backgroundColor = 'rgb(112, 110, 110)';
    i=o;
    slider.style.transform = `translate(${-(i*100)}%)`;
    e.target.style.backgroundColor = 'black';
}

rightButton.addEventListener("click",()=>{
  spanDots[i].style.backgroundColor = 'rgb(112, 110, 110)';
  i=(i+1)%slides.length;
  console.log(i);
  spanDots[i].style.backgroundColor = 'black';
  slider.style.transform = `translate(${-(i*100)}%)`
});

leftButton.addEventListener("click",()=>{
  if(i>=0){
    spanDots[i].style.backgroundColor = 'rgb(112, 110, 110)';
  } 
  i = ((i-1)+(slides.length)) % slides.length;
  console.log(i);
  spanDots[i].style.backgroundColor = 'black';
  console.log(i);
  slider.style.transform = `translate(${(-(i)*100)}%)`
})

