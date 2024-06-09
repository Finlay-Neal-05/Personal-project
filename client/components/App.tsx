import { useGoals } from '../hooks/useGoals.ts'
import GoalsList from './Goals-List.tsx'
import Login from './Login.tsx'

function App() {
  return (
    <>
      <div className="app">
        <div className="body">
          <Login></Login>
          <div className="header">
            <h1>Habit tracker</h1>
          </div>
          <div className="nav"></div>
        </div>
        <GoalsList></GoalsList>
      </div>
    </>
  )
}

export default App

// TODO display existing goals and their progress.
// TODO create add goal button and form.
