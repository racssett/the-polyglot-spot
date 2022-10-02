import { Router } from 'express'
import * as languagesCtrl from '../controllers/languages.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', languagesCtrl.index)
router.post('/', isLoggedIn, languagesCtrl.create)

export {
  router
}