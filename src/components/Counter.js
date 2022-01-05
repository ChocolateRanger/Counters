import React from 'react'

export default function Counter() {
    let n = 0;
    let counter = document.getElementById('count');

    const CounterDecrease = () => {
        console.log('Decrease was clicked');
        n--;
        counter.textContent = n;
        if (counter.textContent < 0) {
            counter.style.color = 'Red';
        }
        else if (counter.textContent > 0) {
            counter.style.color = 'Green';
        }
        else {
            counter.style.color = 'black';
        }
    }

    const CounterIncrease = () => {
        console.log('Increase was clicked');
        n++;
        counter.textContent = n;
        if (counter.textContent < 0) {
            counter.style.color = 'Red';
        }
        else if (counter.textContent > 0) {
            counter.style.color = 'Green';
        }
        else {
            counter.style.color = 'black';
        }
    }

    const CounterReset = () => {
        console.log('Reset was clicked');
        counter.style.color = 'black';
        n = 0;
        counter.textContent = n;
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
                <span className='buttons
                    '>
                    <button className='Decrease' onClick={CounterDecrease}>Decrease</button>
                    <button className='Reset' onClick={CounterReset}>Reset</button>
                    <button className='Increase' onClick={CounterIncrease}>Increase</button>
                </span>
            </div>
        </div>
    </div>
)
}
