import { Pool } from "pg";
const pool = new Pool();
export async function findOrders(req: { params: { customer: string } }) {
  const sql = `SELECT id FROM orders WHERE customer = '${req.params.customer}'`;
  return (await pool.query(sql)).rows;
}
