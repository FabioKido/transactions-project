/**
 * Camada 4
 * Frameworks - Drivers
 * Entry point
 */

import ExpressAdapter from "./infra/api/ExpressAdapter";
import Router from "./infra/api/Router";
import PostgreSQLAdapter from "./infra/database/PostgreSQLAdapter";
import TransactionMemoryRepository from "./infra/repository/TransactionMemoryRepository";

// const connection = new PostgreSQLAdapter()
// const transactionRepository = new TransactionDatabaseRepository()
const transactionRepository = new TransactionMemoryRepository()
const httpServer = new ExpressAdapter()
const router = new Router(httpServer, transactionRepository)

router.init()
httpServer.listen(3000)