
const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let getTime;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        return { timeRemaining, hours, minutes, seconds }
    }


    
    const updateClock = () => {
        getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            if (+timerHours.textContent <= 10 && +timerHours.textContent >= 1) {
                timerHours.textContent = '0' + getTime.hours;
            }
            else {
                timerHours.textContent = getTime.hours;
            }

            if (+timerMinutes.textContent <= 10 && +timerMinutes.textContent >= 1) {
                timerMinutes.textContent = '0' + getTime.minutes;
            }
            else {
                timerMinutes.textContent = getTime.minutes;
            }

            if (+timerSeconds.textContent <= 10 && +timerSeconds.textContent >= 1) {
                timerSeconds.textContent = '0' + getTime.seconds
            }
            else {
                timerSeconds.textContent = getTime.seconds;
            }
            
        }
        
        
    }
    let startClock = () => {
            setInterval(() => {
                updateClock()
            }, 1000) 
    }
    
    startClock();
    
}

export default timer