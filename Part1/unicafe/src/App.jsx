import React, { useState } from 'react'
import Title from './components/Title'
import Statistic from './components/Statistic'
import Button from './components/Button'



function App() {

  const title = 'give feedback'
  const statistic = 'statistic'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ButtGood = () => {
    setGood(good + 1)
  }
  const ButtNeutral = () => {
    setNeutral(neutral + 1)
  }
  const ButtBad = () => {
    setBad(bad + 1)
  }


  return (
    <>
      <Title title={title} />

      <div>
        <Button handleClick={ButtGood} text='good' />
        <Button handleClick={ButtNeutral} text='neutral' />
        <Button handleClick={ButtBad} text='bad' />
      </div>

      <h1>{statistic}</h1>
      <Statistic statistic={statistic} good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App
