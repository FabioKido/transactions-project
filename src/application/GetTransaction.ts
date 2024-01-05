/**
 * Camada 2
 * Use Case
 * Contém as regras de negócio da aplicação/sistema
 * Representam uma ação
 */

import Installment from "../domain/entity/Installment";
import TransactionRepository from "../domain/repository/TransactionRepository";

export default class GetTransaction {

    constructor(readonly transactionRepository: TransactionRepository) {}

    async execute(code: string): Promise<Output> {
        const transaction = await this.transactionRepository.get(code)
        return transaction
    }
}

// Poderia ser DTO
type Output = {
    code: string,
    amount: number,
    numberInstallments: number,
    paymentMethod: string,
    installments: {number: number, amount: number}[]// ou Installment[]
}