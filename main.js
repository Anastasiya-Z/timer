"use strict"


function startClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

}

setInterval(startClock, 1000);
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let reStart = document.getElementById('restart');



let startTime = 0;
let stopFlag = true;
let pausePressedCheck = true;

class coolTimer {


    constructor(name) {
        this.name = name;

    }

    createTimer() {
        let wrap = document.querySelectorAll(this.name)[0];
        console.log(wrap);
        let timerWrp = document.createElement('div');
        let display = document.createElement('div');
        let controllers = document.createElement('div');

        let startBtn = document.createElement('button');
        let pauseBtn = document.createElement('button');
        let stopBtn = document.createElement('button');


        timerWrp.classList.add('timer-inner');
        display.classList.add('display');
        controllers.classList.add('controllers');
        startBtn.classList.add('start');
        startBtn.innerHTML = "Start"
        pauseBtn.classList.add('pause');
        pauseBtn.innerHTML = "Pause";
        stopBtn.classList.add('stop');
        stopBtn.innerHTML = "Restart"

        wrap.append(timerWrp);
        timerWrp.append(display);
        timerWrp.append(controllers);
        controllers.append(startBtn);
        controllers.append(pauseBtn);
        controllers.append(stopBtn);


        function timerStart() {
            if (!stopFlag) {
                return
            }

            console.log(startTime)
            startTime++;
            display.innerHTML = startTime;

        }

        startBtn.addEventListener('click', function() {
            startBtn.classList.add('pointer');

            if (stopFlag) {
                setInterval(timerStart, 1000);

            }
        });


        pauseBtn.addEventListener('click', function() {
            console.log('pause pressed');

            if (pausePressedCheck) {
                pauseBtn.innerHTML = "Continue";
                stopFlag = false;
                pausePressedCheck = false;
            } else {
                pauseBtn.innerHTML = "Pause";
                pausePressedCheck = true;
                stopFlag = true;

            }
        });


        stopBtn.addEventListener('click', function() {
            console.log('restart pressed');
            clearInterval(startTime);
            // stopFlag = true;
            startTime = 0;
        })

    }
}


let coolTimerFirst = new coolTimer('.timer-wrp');
coolTimerFirst.createTimer()