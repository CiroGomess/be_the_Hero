// Login
const connection = require('../database/connection')
module.exports = {
    async create(req, res) {
        const { id } = req.body // pegando ong do corpo

        // verificando se a ong existe no DB
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return res.status(400).json({ error: 'No ONG found with this ID' })
        }

        return res.json(ong)
    }
}