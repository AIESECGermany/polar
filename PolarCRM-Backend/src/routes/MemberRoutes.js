import { 
         previewCurrentMembers,
         newMember,
         getMemberDetails,
         countMembers,
         previewAllMembers,
         updateMember,
         addNewMemberRole
        } from '../controllers/members.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/preview/current', previewCurrentMembers)
router.get('/preview/all', previewAllMembers)
router.post('/new', newMember)
router.put('/update', updateMember)
router.get('/detail/:id', getMemberDetails)
router.get('/count', countMembers)
router.put('/add-new-role', addNewMemberRole)

export default router
