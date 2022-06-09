import { Router } from "express";

import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserController from "../../controllers/users/listUsers.controller";
import updateUserController from "../../controllers/users/updateUser.controller";

const router = Router();

router.post("", createUserController);
router.get("", listUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
