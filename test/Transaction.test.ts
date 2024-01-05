/**
 * Unit test
 */

import Transaction from "../src/domain/entity/Transaction"

test('Deve criar uma transaction', function() {
    const transaction = new Transaction('1010', 1000, 12, 'credit_card')
    transaction.generateInstallments()

    expect(transaction.code).toBe('1010')
    expect(transaction.amount).toBe(1000)
    expect(transaction.numberInstallments).toBe(12)
    expect(transaction.paymentMethod).toBe('credit_card')
    
    expect(transaction.installments).toHaveLength(12)
    expect(transaction.installments[0].number).toBe(1)
    expect(transaction.installments[0].amount).toBe(83.33)
    expect(transaction.installments[11].amount).toBe(83.37)
})