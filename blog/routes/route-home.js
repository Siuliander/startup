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

        var posts = [
            { title: 'Titulo', image: 'url imagem', descrition: 'Descrição' },
            { title: 'Titulo2', image: 'url imagem2', descrition: 'Descrição2' },
            { title: 'Titulo3', image: 'url imagem3', descrition: 'Descrição3' },
            { title: 'Titulo4', image: 'url imagem4', descrition: 'Descrição4' }
        ];

        var membros = [
            { name: 'Nome Completo', profile: 'team-1.jpg', func: 'Cargo ou Função' },
            { name: 'Nome Completo', profile: 'team-2.jpg', func: 'Cargo ou Função' },
            { name: 'Nome Completo', profile: 'team-3.jpg', func: 'Cargo ou Função' }
        ];
        
        var servicos = [
            { servico: 'Serviço', descricao: 'Descrição' },
            { servico: 'Serviço', descricao: 'Descrição' },
            { servico: 'Serviço', descricao: 'Descrição' },
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

        // res.render('pages/index', { posts })
        res.render('template', { empresa, page: 'home', posts, membros, servicos, produtos, testemunhos })

    } catch (error) {
        console.log(error)
    }
})


// exportando as Rotas
module.exports = router;