import { Router } from "express";
import stellarRoutes from "./stellar/stellar.routes"

const router = Router();

router.get('/', (_req, res) => {
    res.send('Stellar-Wallet Api')
})

router.use('/stellar', stellarRoutes)

export default router