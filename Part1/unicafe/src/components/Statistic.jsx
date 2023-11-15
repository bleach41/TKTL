import React from 'react'
import StatisticLine from './StatisticLine'

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
            <table>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={positive} text2='%' />
            </table>
        </>
    )
}

export default Statistic