/**
 * Camada 3
 * Api - Adapter
 * Retira-se o acoplamento entre o serviço externo(express) dessa camada
 */

import CreateTransaction from "../../application/CreateTransaction";
import GetTransaction from "../../application/GetTransaction";
import TransactionRepository from "../../domain/repository/TransactionRepository";
import HttpServer from "./HttpServer";

export default class Router {

    constructor(readonly httpServer: HttpServer, readonly transactionRepository: TransactionRepository) {}

    async init() {
        this.httpServer.on("post", "/transaction", async (params: any, body: any) => {
            // Poderia ter Controller aqui?
            
            const createTransaction = new CreateTransaction(this.transactionRepository)
            await createTransaction.execute(body)
        })

        this.httpServer.on("get", "/transaction/:code", async(params: any, body: any) => {
            // Poderia ter Controller aqui?

            const getTransaction = new GetTransaction(this.transactionRepository)
			const transaction = await getTransaction.execute(params.code)
            
			return transaction
        })
    }
}