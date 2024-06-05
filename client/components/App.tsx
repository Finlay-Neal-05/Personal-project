
import { useGoals } from '../hooks/useGoals.ts'


function App() {
  const goals = useGoals().data
  console.log(goals)
  return (
    <>
      <div className="app">
        <p>This will eventually be my cool personal project</p>
        <p></p>
      </div>
    </>
  )
}

export default App
// TODO display existing goals and their progress.
// TODO create add goal button and form.

