import { Router } from 'express'
import * as countriesCtrl from '../controllers/countries.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', countriesCtrl.index)
router.get('/:id', countriesCtrl.show)
router.get('/:id/edit', isLoggedIn, countriesCtrl.edit)
router.post('/', isLoggedIn, countriesCtrl.create)
router.put('/:id', isLoggedIn, countriesCtrl.update)

export {
  router
}