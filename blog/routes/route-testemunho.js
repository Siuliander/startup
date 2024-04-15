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

        const testemunhos = [
            { 
                nomeCliente: 'Cliente 1',
                profissaoCliente: 'Profissão 1',
                testemunho: [
                    {
                        testemunho: 'Testemunho 1',
                        data: '2024/04/03'
                    },
                ]

            },
            { 
                nomeCliente: 'Cliente 2',
                profissaoCliente: 'Profissão 2',
                testemunho: [
                    {
                        testemunho: 'Testemunho 2',
                        data: '2024/04/03'
                    },
                ]

            },
            { 
                nomeCliente: 'Cliente 3',
                profissaoCliente: 'Profissão 3',
                testemunho: [
                    {
                        testemunho: 'Testemunho 3',
                        data: '2024/04/03'
                    },
                ]

            },
            { 
                nomeCliente: 'Cliente 4',
                profissaoCliente: 'Profissão 4',
                testemunho: [
                    {
                        testemunho: 'Testemunho 4',
                        data: '2024/04/03'
                    },
                ]

            },
        ];

        res.render('template', { empresa, page: 'testemunhos', testemunhos })

    } catch (error) {
        console.log(error)
    }

})

// exportando as Rotas
module.exports = router;