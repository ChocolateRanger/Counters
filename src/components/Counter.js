import React from 'react'

export default function Counter() {
    let n = 0;

    function OnDecrease() {
        let counter = document.getElementById('count');
        console.log("Decrease was clicked");
        n--;
        counter.textContent = n;
        if (counter.textContent < 0) {
            counter.style.color = 'Red';
        }
        else if (counter.textContent === 0) {
            counter.style.color = 'Black';
        }
        else if (counter.textContent > 0) {
            counter.style.color = 'Green';
        }
    }

    function OnReset() {
        let counter = document.getElementById('count');
        console.log("Reset was clicked");
        n = 0;
        counter.textContent = n;
        counter.style.color = 'black';
    }

    function OnIncrease() {
        let counter = document.getElementById('count');
        console.log("Increase was clicked");
        n++;
        counter.textContent = n;
        if (counter.textContent < 0) {
            counter.style.color = 'Red';
        }
        else if (counter.textContent === 0) {
            counter.style.color = 'Black';
        }
        else if (counter.textContent > 0) {
            counter.style.color = 'Green';
        }
    }

    return (
        <div>
            <div className='Container'>
                <h1>
                    Counter:
                    <div id='count'>
                        0
                    </div>
                </h1>
                <div>
                    <span className='buttons'>
                        <button className='Decrease' onClick={OnDecrease}>Decrease</button>
                        <button className='Reset' onClick={OnReset}>Reset</button>
                        <button className='Increase' onClick={OnIncrease}>Increase</button>
                    </span>
                </div>
            </div>
        </div>
    )
}
