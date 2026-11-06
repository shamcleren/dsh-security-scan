import { Pool } from "pg";
const pool = new Pool();
export async function findOrders(req: { params: { customer: string } }) {
  return (await pool.query("SELECT id FROM " + "orders" + " WHERE customer = $1", [req.params.customer])).rows;
}
