import express from 'express';
import { verifyToken } from '../../middleware/userverfy.js';
import { updateprofielControler } from '../../controlers/user/index.js';
const router = express.Router();
const updateprofileRoute = router.post('/user/updateprofile',verifyToken ,updateprofielControler )
export default updateprofileRoute