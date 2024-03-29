import fastify from "fastify";
import { createTransaction, listTransaction } from "./controller/transaction";

const app = fastify();

app.get("/", async () => 'Hello rinha');
app.get("/transaction", listTransaction);
app.post("/transaction", createTransaction);

app.listen({
  host: '0.0.0.0',
  port: 8000
}).then(() => {
  console.log('Server running')
});
