const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#9e2929', '#9e7929', '#7b9e29', '#299e46', '#29879e', '#2b299e', '#73299e', '#9e2942']


let time = 0;
let score = 0;

startBtn.addEventListener('click', event => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up');
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();        
    }
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

// DEBUG
// time = 2;
// startGame();
// DEBUG

function startGame() {
    setInterval(decreaseTime, 1000);
    setTime(time); 
    createRandomCircle();
}

function decreaseTime(){
    if (time === 0){
        finishGame();
    } else {
        let current = --time;
        if (current < 10){
            current = `0${current}`
        }
        setTime(current);     
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`; 
}

function createRandomCircle(){
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const deg = getRandomNumber(1, 360);
    const a = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    const c = getRandomNumber(0, 255);
    const red = getRandomNumber(100, 255);
    const green = getRandomNumber(100, 255);
    const blue = getRandomNumber(100, 255);

    circle.classList.add('circle');    
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;    
    circle.style.background = `linear-gradient(${deg}deg, rgb(${a},${b},${c}), rgb(${c},${a},${b}), rgb(${b},${c},${a}))`;
    circle.style.boxShadow = `0 0 2px #2A333D, 0 0 10px rgb(${red},${green},${blue})`;
    
    board.append(circle);
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function finishGame(){
    //timeEl.parentNode.remove();
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span> </h1>`;
}