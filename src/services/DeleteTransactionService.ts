import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository'
import Transaction from '../models/Transaction';


class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository)

    const transaction = await transactionRepository.findOne(id)

    if(!transaction) {
      throw new AppError('Transaction does not exist')
    }
    await transactionRepository.remove(transaction)
  }
}

export default DeleteTransactionService;
