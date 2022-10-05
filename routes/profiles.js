import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', profilesCtrl.show)
// router.get('/:id/edit', isLoggedIn, profilesCtrl.edit)
// router.get('/:id/languages/:languageId', isLoggedIn, profilesCtrl.editLanguage)
router.post('/:id/languages', isLoggedIn, profilesCtrl.createLanguage)
// router.put('/:id/languages/:languageId', isLoggedIn, profilesCtrl.updateLanguage)
router.delete('/languages/:id', isLoggedIn, profilesCtrl.delete)

export {
  router
}