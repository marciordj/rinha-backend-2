import { knex } from "../config/db";
import { createTransaction, extratoBancario } from "../interface/transaction";

export class Transaction {
  public async createTransaction({ value, type, description}: createTransaction) {
    return knex<createTransaction>('transaction').insert({
      value,
      type,
      description
    })
  }

  public async getExtract(): Promise<extratoBancario> {
   return knex.select('*').from('transaction');   
  }
}
