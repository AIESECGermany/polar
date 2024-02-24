import {
    previewCurrentApplicants,
    newApplicant,
    getApplicantDetails,
    openCount,
    updateApplicant,
    previewAllApplicants
} from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/preview/current', previewCurrentApplicants)
router.get('/preview/all', previewAllApplicants)
router.post('/new', newApplicant)
router.put('/update', updateApplicant)
router.get('/detail/:id', getApplicantDetails)
router.get('/open-count', openCount)

export default router
