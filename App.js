
const info = document.querySelector('.wraper__info');
const info2 = document.querySelector('.wraper__info2')
const stopwatch = document.querySelector('.wraper__stopwatch');
const time = document.querySelector('.wraper__time');
const startBtn = document.querySelector('.wraper__start');
const pauseBtn = document.querySelector('.wraper__pause');
const stopBtn = document.querySelector('.wraper__stop');
const resetBtn = document.querySelector('.wraper__reset');
const historyBtn = document.querySelector('.wraper__history');

const timeListLi = document.querySelector('.wraper__time-list');

const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.modal-shadow__close');
const colors = document.querySelector('.wraper__colors');
const colorRed = document.querySelector('.wraper__color-red');
const colorBlue = document.querySelector('.wraper__color-blue');
const colorGreen = document.querySelector('.wraper__color-green');

let second = 0;
let minute = 0;
let countTime;
let tabArr = []

const startFunction = () => {

    clearInterval(countTime);
    timeListLi.textContent = '';

    countTime = setInterval(() => {

        if (second < 9) {
            second++;
            stopwatch.textContent = `${minute}:0${second}`
        } else if (second >= 9 && second < 59) {
            second++
            stopwatch.textContent = `${minute}:${second}`
        } else {
            minute++;
            second = 0;
            stopwatch.textContent = `${minute}:00`;

        }

    }, 200);

}

const pauseFunction = () => {
    clearInterval(countTime);

}

const stopFunction = () => {

    time.textContent = stopwatch.textContent

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = "visible";

        tabArr.push(stopwatch.textContent);
        console.log(time)

    }

    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    minute = 0;
    second = 0

}
const historyFunction = () => {

    timeListLi.textContent = ''

    let num = 1
    tabArr.forEach(e => {

        const li = document.createElement('li');
        timeListLi.appendChild(li);
        li.innerHTML = `pomiar ${num++} : ${e}`

    })

}

const resetFunction = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    time.style.visibility = "hidden";
    tabArr = [];
    timeListLi.textContent = ''
    minute = 0;
    second = 0

}

const infoFunction = () => {

    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }

}

const windowsfu = (e) => {

    if (e.target === modalShadow) {
        infoFunction()
    } else {
        return false
    }

}

const icon2Function = () => {

    if (!(colors.style.display === 'block')) {
        colors.style.display = 'block'
    } else {
        colors.style.display = 'none'
    }

}

const redFunction = () => {

    const colorsTab = [info, info2, stopwatch];
    colorsTab.forEach(color => color.style.color = 'red')
    const bordersTab = [startBtn, pauseBtn, stopBtn, resetBtn, historyBtn];
    bordersTab.forEach(border => border.style.border = '1px solid red')

}
const blueFunction = () => {
    const colorsTab = [info, info2, stopwatch];
    colorsTab.forEach(color => color.style.color = 'blue')
    const bordersTab = [startBtn, pauseBtn, stopBtn, resetBtn, historyBtn];
    bordersTab.forEach(border => border.style.border = '1px solid blue')
}
const greenFunction = () => {
    const colorsTab = [info, info2, stopwatch];
    colorsTab.forEach(color => color.style.color = 'green')
    const bordersTab = [startBtn, pauseBtn, stopBtn, resetBtn, historyBtn];
    bordersTab.forEach(border => border.style.border = '1px solid green')
}

startBtn.addEventListener('click', startFunction);
pauseBtn.addEventListener('click', pauseFunction);
stopBtn.addEventListener('click', stopFunction);
historyBtn.addEventListener('click', historyFunction)
resetBtn.addEventListener('click', resetFunction);
info.addEventListener('click', infoFunction);
closeBtn.addEventListener('click', infoFunction);
window.addEventListener('click', windowsfu);
info2.addEventListener('click', icon2Function);
colorRed.addEventListener('click', redFunction)
colorBlue.addEventListener('click', blueFunction)
colorGreen.addEventListener('click', greenFunction)