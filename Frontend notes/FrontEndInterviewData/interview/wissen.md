can make a filter like feature using prototype 

flate nested array using recursion 

Hoisting 

what you will do if while routing api call happening again and again in react application we dont want to call api again and again while performing routing 

If a parent is having 5 child component and in all 5 component api is calling and i want to show loading till all 5 componennt sucessfullt call api till then loading is showing after that api data load how you will do that in react application 

new added html5 feature 

if api is calling in asyncthunk and want to load on ui suppose api is having 80lakh of data how you will render on ui
ans => using split approach

code spliting how you will do in react application

higher order function give some example
call apply bind in js 
this keyword 
shallow copy and deepcopy
diff between type and interface
promise and closure
why we use typescript and advantages
pseudo class and pseudo element selector
---------------------------------
console.log(a)
var a = 10
 
console.log(a)
let a = 10
---------------------------------
js output 
async function temp() {

        return 'hello'

    }

async function t() {

    console.log(temp())

    console.log(await temp())

}

t()
---------------------------------
l2 round

Write a function called groupAndCount that takes an array of objects and a key (string) as arguments. The function should group the objects by the value of the specified key and return an object that contains the counts of each group.
 
const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'spinach' },
];
 
const result = groupAndCount(data, 'category');
console.log(result); // { fruit: 3, vegetable: 2 }


function groupAndCount(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        acc[groupKey] = (acc[groupKey] || 0) + 1;
        return acc;
    }, {});
}

const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'spinach' },
];

const result = groupAndCount(data, 'category');
console.log(result); // { fruit: 3, vegetable: 2 }
-------------------------------------------------------------------------------------
const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'spinach' },
];

const output=data.reduce(function(accu,curr){
if(accu[curr.category]){
accu[curr.category] = ++accu[curr.category];
}else{
accu[curr.category]=1;
}
return accu;
},{});

console.log(output)
-----------------------------------------------------
React
make stopwatch with start pause stop resume 

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setTime(0);
    setIsPaused(false);
  };

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={handleStart} disabled={isActive && !isPaused}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isActive || isPaused}>
        Pause
      </button>
      <button onClick={handleResume} disabled={!isPaused}>
        Resume
      </button>
      <button onClick={handleStop} disabled={!isActive && time === 0}>
        Stop
      </button>
    </div>
  );
};

export default Timer;
----------------------------------------------------------------
import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  const handleReset = () => {
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>⏱️ Seconds: {seconds}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;




