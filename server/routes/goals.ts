import { Router } from 'express'
import * as db from '../db/goals'

const router = Router()

router.get('/test', async (req, res) => {
  res.json([
    { msg: 'this is a test1' },
    { msg: 'this is a test2' },
    { msg: 'this is a test3' },
  ])
})

router.get('/goals', async (req, res) => {
  try {
    const data = await db.getAllGoals()
    res.json(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({ mssg: 'There was an error' })
  }
})

export default router
