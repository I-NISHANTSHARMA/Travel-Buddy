import express from 'express'
import { updateUser, deleteUser,getSingleUser, getAllUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


// update user

router.put("/:id",verifyUser, updateUser);
// router.put("/:id", updateUser);
// // delete user

router.delete("/:id",verifyUser, deleteUser);
// router.delete("/:id", deleteUser);
// // get single user

router.get("/:id",verifyUser, getSingleUser);
// router.get("/:id", getSingleUser);

// // get all user

router.get("/" ,verifyAdmin, getAllUser);
// router.get("/" , getAllUser);

export default router