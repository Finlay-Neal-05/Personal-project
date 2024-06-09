import { Router } from 'express'

const router = Router()

router.get('/test', async (req, res) => {
  res.json([
    { msg: 'this is a test1' },
    { msg: 'this is a test2' },
    { msg: 'this is a test3' },
  ])
})

export default router
