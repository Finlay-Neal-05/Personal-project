
import { useGoals } from '../hooks/useGoals.ts'
import Login from './Login.tsx'


function App() {
  const goals = useGoals().data
  console.log(goals)

  return (
    <>
      <div className="app">
        <p>This will eventually be my cool personal project</p>
        <Login></Login>
      </div>
    </>
  )
}

export default App


// TODO display existing goals and their progress.
// TODO create add goal button and form.