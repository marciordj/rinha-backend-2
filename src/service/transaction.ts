export class Transaction {
  async getExtract() {
    return {
      saldo: {
        total: 1000,
        tipo: "c",
        limite: 1000
      }
    }
  }
}
