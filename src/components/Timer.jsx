import React, {useState} from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer"

export default function Timer(){
    const [seconds, setSeconds] =useState(0);
    const [isPlaying, setIsPlaying] =useState(false);
    return(
        <div>
            <h1>Timer</h1>
            <CountdownCircleTimer
                isPlaying = {isPlaying}
                duration={seconds}
                colors={["#004777"]}

            >
                {({remainingTime}) => {
                    if(remainingTime === 0){
                        setIsPlaying(false);
                        alert("Time is Up !");
                        return <div>Time is Up!</div>
                    }else{
                        return (
                            <>
                                <div>{Math.floor(remainingTime / 3600)}hours</div>{" "}
                                <div>{Math.floor(remainingTime % 3600) / 60}minutes</div>
                                <div>{remainingTime % 60}seconds</div>
                            </>
                        )
                    }
                }}
            </CountdownCircleTimer>
            <button onClick={()=>setSeconds((prev) => prev + 1)}>+ Second</button>
            <button onClick={() => {
                if(seconds > 0){
                    setSeconds((prev) => prev - 1)
                }
            }}>- Second</button>
            <button onClick={()=>setSeconds((prev) => prev + 60)}>+ Minute</button>
            <button onClick={()=>{
                if(seconds >=60){
                    setSeconds((prev) => prev - 60)
                }
            }}>- Minute</button>
            <button onClick={()=>setSeconds((prev) => prev + 3600)}>+ Hour</button>
            <button onClick={()=>{
                if(seconds >= 3600){
                    setSeconds((prev) => prev -3600)
                }
            }}>- Hour</button>
            <button disabled={isPlaying} onClick={()=>setIsPlaying(true)}>Play</button>
        </div>
    )
}