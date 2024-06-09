import connection from './connection'
import { GoalData } from '../../models/goals'

const db = connection

export async function getAllGoals(): Promise<GoalData[]> {
  const result = await db('goals').select()
  return result
}
