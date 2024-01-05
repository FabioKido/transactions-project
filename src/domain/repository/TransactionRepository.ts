/**
 * Camada 1
 * Repository
 * O Repository(Pattern) lida com a camada de acesso aos dados
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

import Transaction from "../entity/Transaction"

export default interface TransactionRepository {
    save (transaction: Transaction): Promise<void>
    get (code: string): Promise<Transaction>
}