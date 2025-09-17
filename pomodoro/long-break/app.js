// const timer = document.getElementById('timer')
// const startBtn = document.getElementById('button-start')

// let timeLeft = 1500;
// let interval;

// const updateTimer = () => {
//     const menit = Math.floor(timeLeft / 60)
//     const detik = timeLeft % 60

//     timer.innerHTML = `${menit.toString().padStart(2, "0")}:${detik.toString().padStart(2, "0")}`
// }

// const startTimer = () => {
//     interval = setInterval(() => {
//         timeLeft--
//         updateTimer()

//         if (timeLeft === 0){
//             clearInterval(interval)
//             alert('Waktunya habis saatnya break!')
//             timeLeft = 1500
//             updateTimer
//         }
//     }, 1000)
// }

// startBtn.addEventListener("click", startTimer)

const timer = document.getElementById('timer')
const startBtn = document.getElementById('button-start')
const pauseBtn = document.getElementById('button-pause')
const restartBtn = document.getElementById('button-restart')

let timeLeft = 900; // 25 menit
let interval;

const updateTimer = () => {
    const menit = Math.floor(timeLeft / 60)
    const detik = timeLeft % 60
    timer.innerHTML = `${menit.toString().padStart(2, "0")}:${detik.toString().padStart(2, "0")}`
}

const startTimer = () => {
    if (!interval) { // biar gak double interval
        interval = setInterval(() => {
            timeLeft--
            updateTimer()

            if (timeLeft === 0) {
                clearInterval(interval)
                interval = null
                alert('Waktunya habis! Saatnya break 🎉')
                timeLeft = 900
                updateTimer()
            }
        }, 1000)
    }
}

const pauseTimer = () => {
    clearInterval(interval)
    interval = null
}

const restartTimer = () => {
    clearInterval(interval)
    interval = null
    timeLeft = 900
    updateTimer()
}

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
restartBtn.addEventListener("click", restartTimer)

updateTimer() // biar pas reload langsung tampil "25:00"
