const express = require('express')
const session = require('express-session')

// Setup
const app = express()

// Configuração do jsonparse e bodyparse
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configuração EJS
app.set('view engine', 'ejs')
// definindo o caminho da views ejs
app.set('views', './app/views')

// Configuração arquivos estáticos
app.use(express.static('./app/public'))

// Configuração express-session
// https://passwordsgenerator.net/pt/
app.use(session({
    secret:'j7cS(N5:Uf*<S)YT' ,//chave de segurança usada na assinatura dos identificadores de sessão (ID é armazenado em um cookie e tbm na memoria do server)
    resave: false, // Otimiza para que a sessão não seja salva novamente a cada requisição
    saveUninitialized: false, // Otimiza o uso do armazenamento no servidor, evitando armazenar sessões não inicializadas
}))

module.exports = app