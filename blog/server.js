const express = require('express')
var path = require('path')

const xss = require('xss-clean')

const server = express()
server.set('view engine', 'ejs')

server.use(express.json())
server.use(express.urlencoded({extended: false}))
// server.use(cookieParser())
server.use(express.static( path.join(__dirname, 'public')))

server.use( xss() )

/**
 * IMPORTANDO AS ROTAS
 */
const rotaInicio = require('./routes/route-home');
const rotaSobre = require('./routes/route-sobre');
const rotaServico = require('./routes/route-servico');
const rotaContacto = require('./routes/route-contacto');
const rotaMembro = require('./routes/route-membro');

const rotaBlog = require('./routes/route-blog');
const rotaPreco = require('./routes/route-preco');
const rotaTestemunho = require('./routes/route-testemunho');
const rotaOrcamento = require('./routes/route-orcamento');

/**
 * USANDO OU CRIANDO AS ROTAS
 */
server.use('/',rotaInicio);
server.use('/sobre',rotaSobre);
server.use('/servicos',rotaServico);
server.use('/contacto',rotaContacto);
server.use('/membros',rotaMembro);

server.use('/blog',rotaBlog);
server.use('/precos',rotaPreco);
server.use('/testemunhos',rotaTestemunho);
server.use('/orcamento',rotaOrcamento);




/**
 * INICIALIZANDO O SERVIDOR 
 */
const server_port = process.env.PORT || 80;

server.listen(server_port, () => {
    console.log(`Servidor do BLOG rodando na porta: ${server_port}`)
})