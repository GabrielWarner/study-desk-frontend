import React, {useState, useEffect} from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from '../ProgressProvider.js';


export default function Pomodoro() {
    const [minuteInput, setMinuteInput] = useState(0)
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
        setMinutes(parseInt(minuteInput))
        setSeconds(0)
        setMinuteInput(0)
    }

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        
    
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return setMinuteInput(e.target.value)
      };

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

            
            return
        }
    }, [seconds, startButton])

    
    const timerMinutes = minutes  < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds  < 10 ? `0${seconds}` : seconds;
    const timeInSeconds = (minutes * 60) + seconds

  return (
    <div className='pomodoro-container'>
        <h1>Pomodoro Timer</h1>
        <button onClick={()=>{startToggle()}}>Start/Stop</button>

        <p>Or choose your own time</p>
        <form onSubmit={(e)=>{setTimer(e)}}>
            <input value={minuteInput} onChange={handleInputChange} type="text" name='value'></input>
            <button>Set</button>
        </form>
        <div className='message'>
           {displayMessage && <div>Session over. Break starts now.</div>}
        </div>
        <h2 className='timer'>{timerMinutes}:{timerSeconds}</h2>
        {/* <ProgressProvider valueStart={timeInSeconds} valueEnd={0}>
  {(value) => <CircularProgressbar value={timeInSeconds} />}
</ProgressProvider> */}
    </div>
  )
}
