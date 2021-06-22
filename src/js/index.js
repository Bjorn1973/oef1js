import "../css/style.scss";
import Square from "./classes/Square";

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRandomColor = ()=>{
    const letters = Math.random().toString(16).slice(2,8);
    const hex = "#";
    return hex+letters;
}

const holder = document.querySelector('#root');
holder.style.width= window.innerWidth+'px';
const holderW = parseInt(holder.style.width);
holder.style.height = window.innerHeight +'px';
const holderH = parseInt(holder.style.height);
holder.style.backgroundColor = getRandomColor();

console.log(holderW);

const fourParts = ()=>{
    holder.insertAdjacentHTML('beforeend', `<div class="lineV"></div>`);
    const vert = document.querySelector('.lineV');
    vert.style.position = "absolute";
    vert.style.left = "50%";
    vert.style.top = "0";
    vert.style.width = "5px";
    vert.style.height = "100vh";
    vert.style.background = "black";
    holder.insertAdjacentHTML('beforeend', `<div class="lineH"></div>`);
    const hor = document.querySelector('.lineH');
    hor.style.position = "absolute";
    hor.style.left = "0";
    hor.style.top = "50%";
    hor.style.width = "100vw";
    hor.style.height = "5px";
    hor.style.background = "black";
};

fourParts();

const numberArr = [];
console.log(numberArr);
let countSQ = 0;
let countC = 0;
let countT = 0;


const seeCountSQ = () =>{
    holder.insertAdjacentHTML('beforeend', `<div class="countSQ"></div>`);
    const divCountSQ = document.querySelector('.countSQ');
    divCountSQ.textContent = `vierkanten : ${countSQ}`;
    divCountSQ.style.position = "absolute";
    divCountSQ.style.bottom = 300 + 'px';
    divCountSQ.style.right = 480 + 'px';
    divCountSQ.style.fontSize = 50+'px';
}

seeCountSQ();

const seeCountC = () =>{
    holder.insertAdjacentHTML('beforeend', `<div class="countC"></div>`);
    const divCountC = document.querySelector('.countC');
    divCountC.textContent = `cirkels : ${countC}`;
    divCountC.style.position = "absolute";
    divCountC.style.bottom = 200 + 'px';
    divCountC.style.right = 480 + 'px';
    divCountC.style.fontSize = 50+'px';
}

seeCountC();

const seeCountT = () =>{
    holder.insertAdjacentHTML('beforeend', `<div class="countT"></div>`);
    const divCountT = document.querySelector('.countT');
    divCountT.textContent = `driehoeken : ${countT}`;
    divCountT.style.position = "absolute";
    divCountT.style.bottom = 100 + 'px';
    divCountT.style.right = 480 + 'px';
    divCountT.style.fontSize = 50+'px';
}

seeCountT();

const divCountSQ = document.querySelector('.countSQ');
const divCountC = document.querySelector('.countC');
const divCountT = document.querySelector('.countT');

const stopShapes = ()=>{
    if(numberArr.length === 50){
        clearInterval(shapes);
        if(countSQ > countC && countSQ > countT){
            divCountSQ.style.backgroundColor = "#fff";
        }else if(countC > countT){
            divCountC.style.backgroundColor = "#fff";
        }else {
            divCountST.style.backgroundColor = "#fff";
        }
    }
    
}

const shapes = setInterval(() => {
    const number = getRandomNumber(1,3);
    console.log(number);
    numberArr.push(number);
    if(number === 1){
        countSQ ++;
        seeCountSQ();
        holder.insertAdjacentHTML('beforeend', `<div class="square"></div`);
        const square = document.querySelector('.square');
        square.style.backgroundColor = getRandomColor();
        square.style.position = "absolute";
        square.style.width = getRandomNumber(50,100)+'px';
        const squareW = parseInt(square.style.width);
        square.style.height = squareW +'px';
        square.style.top = getRandomNumber(10, ((holderH/2-squareW)-10) ) +'px';
        square.style.left = getRandomNumber(10, holderW/2-squareW) +'px';
    }else if(number === 2){
        countC ++;
        seeCountC();
        holder.insertAdjacentHTML('beforeend', `<div class="circle"></div`);
        const circle = document.querySelector('.circle');
        circle.style.backgroundColor = getRandomColor();
        circle.style.position = "absolute";
        circle.style.width = getRandomNumber(50,100)+'px';
        const circleW = parseInt(circle.style.width);
        circle.style.height = circleW +'px';
        circle.style.borderRadius = "50%";
        circle.style.top = getRandomNumber(10, holderH/2-(circleW+10)) +'px';
        circle.style.left = getRandomNumber((holderW/2)+10+circleW, holderW/2+circleW ) +'px';
    }
    else if(number === 3){
        countT ++;
        seeCountT();
        holder.insertAdjacentHTML('beforeend', `<div class="triangle"></div`);
        const triangle = document.querySelector('.triangle');
        triangle.style.position = "absolute";
        triangle.style.width = getRandomNumber(50,100)+'px';
        const triangleW = parseInt(triangle.style.width);
        triangle.style.height = triangleW +'px';
        triangle.style.backgroundColor = getRandomColor();
        triangle.style.clipPath = "polygon(0% 100%, 50% 0%, 100% 100%)";
        triangle.style.top = getRandomNumber(holderH-(triangleW+10),holderH/2 + 10) +'px';
        triangle.style.left = getRandomNumber(10, holderW/2-triangleW ) +'px';
    }
    stopShapes();
}, 1000);







