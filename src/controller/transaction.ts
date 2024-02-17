import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { Transaction } from "../service/transaction";

export async function listTransaction(request: FastifyRequest, reply: FastifyReply) {
  const transaction = new Transaction()
 return reply.status(200).send(await transaction.getExtract())
}

export async function createTransaction(request: FastifyRequest, reply: FastifyReply) {
  const transactionBodySchema = z.object({
    value: z.number(),
    type: z.enum(['c', 'd']),
    description: z.string()
  });

  const { description, type, value } = transactionBodySchema.parse(request.body);
  try {
    const transaction = new Transaction();

    await transaction.createTransaction({ value, type, description });

    return reply.status(201).send('criado');
  }catch (err) {
    return reply.status(400).send({ message: err })
  }

}
