type extratoBancario = {
  saldo: {
    total: number;
    data_extrato: string;
    limite: number;
  };
  ultimas_transacoes: Array<{
    valor: number;
    tipo: 'c' | 'd';
    descricao: string;
    realizada_em: string;
  }>;
}

export class Transaction {
  async createTransaction() {
    
  }

  async getExtract(): Promise<extratoBancario> {
  const mockData: extratoBancario = {
    saldo: {
      total: -1000,
      data_extrato: "2024-01-17T02:34:41.217753Z",
      limite: 1000
    },
    ultimas_transacoes: [{
      valor: 10,
      tipo: "c",
      descricao: "teste",
      realizada_em: "2024-01-17T02:34:38.543030Z"
    }]
  };

  return mockData;   
  }
}
