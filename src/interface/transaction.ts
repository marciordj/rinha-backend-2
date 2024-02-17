export type extratoBancario = {
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

export type createTransaction = {
  value: number;
  type: "c" | "d";
  description: string;
}
