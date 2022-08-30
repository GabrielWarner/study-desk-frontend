import React, {useState, useEffect} from 'react'

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [startButton, setStartButton] = useState(false)

    const startToggle = () => {
        // 👇️ passed function to setState
        setStartButton(current => !current);
      };

    const setTimer = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setMinutes(parseInt(e.target.value))
        startToggle()
    }

    useEffect(() => {
        if(startButton){

            let interval = setInterval(()=>{
                clearInterval(interval)
    
            if (seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }else{
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59;
    
    
    
                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                }
            }else {
                setSeconds(seconds - 1)
            }
            },1000)
        }else{
            setSeconds(0)
            setMinutes(25)
            setDisplayMessage(!displayMessage)
            return
        }
    }, [seconds, startButton])
    
    const timerMinutes = minutes  < 10 ? `0${minutes}` : minutes;
    const timerSeconds = minutes  < 10 ? `0${seconds}` : seconds;

  return (
    <div className='pomodoro-container'>
        <h1>Pomodoro Timer</h1>
        <button onClick={()=>{startToggle()}}>Start</button>
        <p>Or choose your own time</p>
        <form onSubmit={(e)=>{setTimer(e)}}>
            <input type="text" name='value'></input>
            <button>Submit</button>
        </form>
        <div className='message'>
           {displayMessage && <div>Session over. Break starts now.</div>}
        </div>
        <div className='timer'>{timerMinutes}:{timerSeconds}</div>
    </div>
  )
}
