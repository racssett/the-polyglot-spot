import { Router } from 'express'
import * as languagesCtrl from '../controllers/languages.js'

const router = Router()

router.get('/', languagesCtrl.index)

export {
  router
}