export interface Goal {
  user_id: number
  title: string
  content: string
  timeCreated: string
  timeCompleted: string
  duration: string
  mainGoal: boolean
  completed: boolean
  timeDone: string
  progress: number
}

export interface GoalData extends Goal {
  id: number
}
