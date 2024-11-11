let timer;
let isRunning=false;
elapsedTime=0
let watch =document.querySelector('.watch')
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
let box3=document.querySelector('.box3')
let box4=document.querySelector('.box4')

let buttons=document.getElementsByTagName('button')


for (let button of buttons) {
    button.addEventListener('click', () => {
        // Remove the 'buttonClicked' class from all buttons
        for (let btn of buttons) {
            btn.classList.remove('buttonClicked');
        }
        
        // Add the 'buttonClicked' class only to the clicked button
        button.classList.add('buttonClicked');
    });
}

let startTimer=()=>{
    if (isRunning) return;
    isRunning = true;
    const startTime = Date.now() - elapsedTime;

    timer=setInterval(() => {
        elapsedTime= Date.now()- startTime;
        displayTime(elapsedTime)
    }, 1);
}

let stopeTimer=()=>{
    clearInterval(timer);
    isRunning=false;
    console.log('running stoped...');
}

let resetTimer=()=>{
    stopeTimer();
    isRunning = false;
    elapsedTime = 0;
    displayTime(0);
}

function displayTime(ms){
    const totalSeconds = Math.floor(ms / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            const milliseconds = Math.floor(ms / 10) % 100
            box1.textContent=`${String(hours).padStart(2, '0')} `
            box2.textContent=`${String(minutes).padStart(2, '0')}`
            box3.textContent=`${String(seconds).padStart(2, '0')} `
            box4.textContent=`${String(milliseconds).padStart(2, '0')} `

        }


 