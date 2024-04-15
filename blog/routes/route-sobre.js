const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {

    try {
        const empresa = [
            {
                name: "Conexão Digital", 
                nif: '006422972LA047', 
                address: 'Angola, Luanda, Viana, Zango 2, S/N', 
                contact: '+244 930 015 277', 
                email: 'exemplo@exemplo.exemplo'
            }
        ];

        var membros = [
            { name: 'Nome Completo', profile: 'team-1.jpg', func: 'Cargo ou Função' },
            { name: 'Nome Completo', profile: 'team-2.jpg', func: 'Cargo ou Função' },
            { name: 'Nome Completo', profile: 'team-3.jpg', func: 'Cargo ou Função' }
        ];

        res.render('template', { empresa, page: 'sobre', membros })

    } catch (error) {
        console.log(error)
    }

})

// exportando as Rotas
module.exports = router;