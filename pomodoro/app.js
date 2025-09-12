const timer = document.getElementById('timer')
const startBtn = document.getElementById('button-start')

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const menit = Math.floor(timeLeft / 60)
    const detik = timeLeft % 60

    timer.innerHTML = `${menit.toString().padStart(2, "0")}:${detik.toString().padStart(2, "0")}`
}

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--
        updateTimer()

        if (timeLeft === 0){
            clearInterval(interval)
            alert('Waktunya habis saatnya break!')
            timeLeft = 1500
            updateTimer
        }
    }, 1000)
}

startBtn.addEventListener("click", startTimer)