import { Router } from "express";
import { createAccount } from "./handlers";

const router =Router();


//routing


/* autenticación y registro*/
router.post('/auth/register',createAccount)

export default router;