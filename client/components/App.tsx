
import { useGoals } from '../hooks/useGoals.ts'
import Login from './Login.tsx'


function App() {
  const goals = useGoals().data
  console.log(goals)

  return (
    <>
      <div className="app">
        <div className="body">
        <Login></Login>
          <div className="header"><h1>Habit tracker</h1></div>
        </div>
        
      </div>
    </>
  )
}

export default App


// TODO display existing goals and their progress.
// TODO create add goal button and form.