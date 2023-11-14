import React, { useState } from 'react'
import Title from './components/Title'
import Statistic from './components/Statistic'


function App() {

  const title = 'give feedback'
  const statistic = 'statistic'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ButtGood = () => {
    setGood(good + 1)
    console.log(good)
  }
  const ButtNeutral = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }
  const ButtBad = () => {
    setBad(bad + 1)
    console.log(bad)
  }


  return (
    <>
      <Title title={title} />
      <div>
        <button onClick={ButtGood}>good</button>
        <button onClick={ButtNeutral}>neutral</button>
        <button onClick={ButtBad}>bad</button>
      </div>
      <h1>{statistic}</h1>
      <Statistic statistic={statistic} good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App
