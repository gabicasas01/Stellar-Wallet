import { Router } from "express";
import createStellarAccount from "../../controllers/stellar/createAccount";
import getBalance from "../../controllers/stellar/getBalance";

const router = Router()

router.get('/createAccount', createStellarAccount)
router.get('/balance', getBalance)

export default router
