import request from 'superagent'
import { GoalData } from '../../models/goals'

const rootUrl = '/api/v1'

export function getTests(): Promise<string[]> {
  return request.get(rootUrl + '/test').then((res) => {
    return res.body
  })
}

export function getGoals(): Promise<GoalData[]> {
  return request.get(rootUrl + '/goals').then((res) => {
    return res.body
  })
}
