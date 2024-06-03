import { Router } from 'express'

const router = Router()

router.get('/test', async (req, res) => {
    res.json({ msg: "Wow! This is now displaying in the front end!", msg2: "Now I have to add multiple so that I can do some cool mapping!"})
  })

  export default router