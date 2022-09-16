
const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

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
        // const getTime = getTimeRemaining();
        const {timeRemaining, hours, minutes, seconds} = getTimeRemaining();
        console.log(timeRemaining);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        if (timeRemaining > 0) {
            if (+timerHours.textContent <= 10 && +timerHours.textContent >= 1) {
                timerHours.textContent = '0' + hours;
            }
            else {
                timerHours.textContent = hours;
            }

            if (+timerMinutes.textContent <= 10 && +timerMinutes.textContent >= 1) {
                timerMinutes.textContent = '0' + minutes;
            }
            else {
                timerMinutes.textContent = minutes;
            }

            if (+timerSeconds.textContent <= 10 && +timerSeconds.textContent >= 1) {
                timerSeconds.textContent = '0' + seconds
            }
            else {
                timerSeconds.textContent = seconds;
            }
            
        }
        
        
    }
    let startClock = () => {
            updateClock();  
            setInterval(() => {
                updateClock()
            }, 1000) 
    }

    startClock();
    
}

export default timer