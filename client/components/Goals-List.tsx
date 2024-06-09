import { useState } from 'react'
import { useGoals } from '../hooks/useGoals'
import { json } from 'react-router-dom'

export default function GoalsList() {
  const goalsList = useGoals()

  const { data: goals, isPending, isError, error } = useGoals()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.log(error)
    return <p>`There was an error</p>
  }

  return (
    <>
      <div className="goalContainer">
        <p>This is a test</p>
        {goals.map((goal, i) => {
          return <p key={i}>{goal.msg}</p>
        })}
      </div>
    </>
  )
}
