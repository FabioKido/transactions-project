/**
 * Camada 3
 * Http Server - Adapter
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {

    app: any

    constructor() {
        this.app = express()
        this.app.use(express.json())
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function(req: Request, res: Response){
            const output = await callback(req.params, req.body)
            res.json(output)
        })
    }

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log('Server started: http://localhost:3000')
        })
    }
}