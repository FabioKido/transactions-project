/**
 * Camada 3
 * Repository - Adapter
 * O Repository(Pattern) lida com a camada de acesso aos dados
 * Cria-se(nessa arquitetura) um Contrato(Interface) e uma Implementação(Classe)
 */

import Installment from "../../domain/entity/Installment";
import Transaction from "../../domain/entity/Transaction";
import TransactionRepository from "../../domain/repository/TransactionRepository";
import Connection from "../database/Connection";

export default class TransactionDatabaseRepository implements TransactionRepository {

    constructor(readonly connection: Connection) {}
    
    async save(transaction: Transaction): Promise<void> {
        await this.connection.query("insert into public.transaction (code, amount, number_installments, payment_method) values ($1, $2, $3, $4)", [transaction.code, transaction.amount, transaction.numberInstallments, transaction.paymentMethod]);
		for (const installment of transaction.installments) {
			await this.connection.query("insert into public.installment (code, number, amount) values ($1, $2, $3)", [transaction.code, installment.number, installment.amount]);
		}
    }

    async get(code: string): Promise<Transaction> {
        const transactionData = await this.connection.findOne("select * from public.transaction where code = $1", [code]);
		const transaction = new Transaction(transactionData.code, parseFloat(transactionData.amount), transactionData.number_installments, transactionData.payment_method);
		const installmentsData = await this.connection.query("select * from public.installment where code = $1", [code]);
		for (const installmentData of installmentsData) {
			const installment = new Installment(installmentData.number, parseFloat(installmentData.amount));
			transaction.installments.push(installment);
		}
		return transaction;
    }
}