/**
 * Camada 3
 * Repository - Adapter
 * O Repository(Pattern) lida com a camada de acesso aos dados
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

import Transaction from "../../domain/entity/Transaction";
import TransactionRepository from "../../domain/repository/TransactionRepository";
import Connection from "../database/Connection";

export default class TransactionDatabaseRepository implements TransactionRepository {

    constructor(readonly connection: Connection) {}
    
    async save(transaction: Transaction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async get(code: string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
}