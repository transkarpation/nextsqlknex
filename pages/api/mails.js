import { getKnex } from '../../knex'

export default async function handler(req, res) {
  const knex = getKnex()
  const mails = await knex('mail')
  res.status(200).json(mails)
}