import { Router } from 'express'
import * as countriesCtrl from '../controllers/countries.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', countriesCtrl.index)

export {
  router
}