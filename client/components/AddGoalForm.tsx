import { useState } from 'react'
import { Goal } from '../../models/goals'

export default function AddGoalForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    console.log('YAY')
  }
  return (
    <>
      <form className="addNewGoalForm" onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="title">
            {' '}
            <input
              id="title"
              name="title"
              type="text"
              onChange={(e) => setTitle(e)}
            >
              {title}
            </input>
          </label>
        </div>
        <div className="inputField">
          <label htmlFor="content">
            <input
              id="content"
              name="content"
              type="text"
              onChange={(e) => {
                setContent(e)
              }}
            >
              {content}
            </input>
          </label>
        </div>
      </form>
    </>
  )
}
