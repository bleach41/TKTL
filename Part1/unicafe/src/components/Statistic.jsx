import React from 'react'

function Statistic({ good, neutral, bad }) {
    if (good === 0 & neutral === 0 & bad === 0) {
        return (
            <div>
                <h2>No feedback give</h2>
            </div>
        )
    }

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good * 100 / all



    return (
        <>
            <h2>good: {good}</h2>
            <h2>neutral: {neutral}</h2>
            <h2>bad: {bad}</h2>
            <h2>all: {all}</h2>
            <h2>average: {average}</h2>
            <h2>positive:{positive}%</h2>
        </>
    )
}

export default Statistic