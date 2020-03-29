const connection = require("../database/connection"); // Banco de dados
const gerenationUnicId = require('../utils/generationUnicId')
module.exports = {
    // Listagem de ONGS
    async index (req, res) {
        // selecionando todos os registros da tabela ONGS
        const ongs = await connection('ongs').select('*')

        return res.json(ongs);
    },

    // Cadastro de ONGS
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        
        const id = gerenationUnicId // Gerando 4 bits de hexadecimal
        //Inserindos dados na tabela ong
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })
        return res.json({ id })
    }
}