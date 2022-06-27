import "./App.css";
import { Timer, TimerClassComponent } from "./Timer/Timer";
import { Clock, ClockClassComponent } from "./Clock/Clock";
import { useState } from "react";

function App() {
  const [isTimer,setisTimer]=useState(false);
  return (
    <div>
      <button onClick={()=>setisTimer(!isTimer)} style={{backgroundColor:"lightslategray",color:"#00f005",}}>toggle</button>
      {isTimer?<TimerClassComponent date={new Date()}/> : <ClockClassComponent date={ new Date()}/>
      //isTimer?<Timer date={new Date()}/> : <Clock date={new Date()}/>
      }
    </div>
  );
}

export default App;
