
const colors =['red','orange','yellow','green','blue','purple','indigo','violet'];
const boxContainer = document.querySelector('#container');


const backgroundColor = function(){
    const h1 = document.querySelector('#color');
    const color = this.style.backgroundColor;

    document.body.style.backgroundColor = color;
    h1.classList.add('#color');
    h1.textContent = color;
}




for(let color of colors){
    const colorBox = document.createElement('div');
    colorBox.classList.add('box');
    colorBox.style.backgroundColor = color;
    boxContainer.appendChild(colorBox);
    colorBox.addEventListener('click',backgroundColor)
}