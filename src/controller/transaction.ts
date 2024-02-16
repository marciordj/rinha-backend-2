import { FastifyRequest, FastifyReply } from "fastify";
import { Transaction } from "../service/transaction";

export async function listTransaction(request: FastifyRequest, reply: FastifyReply) {
  const transaction = new Transaction()
 return reply.status(200).send(await transaction.getExtract())
}
