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

        const produtos = [
            {
                nome: 'Website Pequeno Porte',
                categoria: 'Site',
                preco: '273.000,00',
                items: [
                    { nome: '1 site', bool: true },
                    { nome: 'Página Inicial', bool: true },
                    { nome: 'Página sobre a Empresa', bool: true },
                    { nome: 'Página de Serviços / Produtos', bool: true },
                    { nome: 'Página detalhada de Produtos', bool: false },
                    { nome: 'Formulário de Contactos', bool: true },
                    { nome: 'Links de Redes Sociais', bool: true },
                    
                    { nome: 'Gestão de Funcionários / Técnicos', bool: false },
                    { nome: 'Coméntarios e Interações', bool: false },
                    
                    { nome: 'Personalização por Solicitação', bool: false },
                    { nome: 'API ', bool: true },


                ]
            },
            {
                nome: 'Website Médio Porte',
                categoria: 'Site',
                preco: '457.850,00',
                items: [
                    { nome: '2 sites', bool: true },
                    { nome: 'Página Inicial', bool: true },
                    { nome: 'Página sobre a Empresa', bool: true },
                    { nome: 'Página de Serviços / Produtos', bool: true },
                    { nome: 'Página detalhada de Produtos', bool: true },
                    { nome: 'Formulário de Contactos', bool: true },
                    { nome: 'Links de Redes Sociais', bool: true },
                    { nome: 'Formulário de Newsletter ', bool: true },
                    
                    { nome: 'Gestão de Funcionários / Técnicos ', bool: true },
                    { nome: 'Coméntarios e Interações', bool: false },
                    
                    { nome: 'Personalização por Solicitação', bool: false },
                    { nome: 'API ', bool: true },


                ]
            },
            {
                nome: 'Website Grande Porte',
                categoria: 'Site',
                preco: '671.200,00',
                items: [
                    { nome: '2 sites', bool: true },
                    { nome: 'Página Inicial', bool: true },
                    { nome: 'Página sobre a Empresa', bool: true },
                    { nome: 'Página de Serviços / Produtos', bool: true },
                    { nome: 'Página detalhada de Produtos', bool: true },
                    { nome: 'Formulário de Contactos', bool: true },
                    { nome: 'Links de Redes Sociais', bool: true },
                    { nome: 'Formulário de Newsletter ', bool: true },
                    
                    { nome: 'Área de Anúncios', bool: true },
                    { nome: 'Gestão de Clientes', bool: true },
                    { nome: 'Página de Funcionários / Técnicos ', bool: true },
                    { nome: 'Gestão de Funcionários / Técnicos ', bool: true },
                    { nome: 'Coméntarios e Interações', bool: true },
                    
                    { nome: 'Personalização por Solicitação', bool: true },
                    { nome: 'API ', bool: true },


                ]
            },
        ];

        res.render('template', { empresa, page: 'precos' , produtos})

    } catch (error) {
        console.log(error.message)
    }

})

// exportando as Rotas
module.exports = router;