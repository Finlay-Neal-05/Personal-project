import { useGoals } from '../hooks/useGoals'
import { GoalData } from '../../models/goals'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function GoalsList() {
  const { data, isPending, isError, error } = useGoals()

  const handleClick = () => {
    console.log('Add a new goal!')
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.log(error)
    return <p>`There was an error</p>
  }

  return (
    <>
      <IfAuthenticated>
        <>
          <div className="goalContainer">
            <p>This is a test</p>
            {data.map((goal: GoalData, i: number) => {
              return (
                <p key={i}>
                  {goal.title}, {goal.content}, id: {goal.id}
                </p>
              )
            })}
            <button className="button1" id="addGoal" onClick={handleClick}>
              Add Goal
            </button>
          </div>
        </>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <div className="goalContainer">
          <p>please login to see goals</p>
        </div>
      </IfNotAuthenticated>
    </>
  )
}
