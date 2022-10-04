import { Router } from 'express'
import * as languagesCtrl from '../controllers/languages.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', languagesCtrl.index)
router.get('/:id', languagesCtrl.show)
router.get('/:id/edit', isLoggedIn, languagesCtrl.edit)
router.post('/', isLoggedIn, languagesCtrl.create)
router.post('/:id/tips', languagesCtrl.createTip)
router.put('/:id', isLoggedIn, languagesCtrl.update)
router.delete('/:id', isLoggedIn, languagesCtrl.delete)

export {
  router
}