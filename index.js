const express = require('express')
const app = express()

app.use(express.json())

const usuarios = {}//Usuários têm id, nome e e-mail.

app.get('rede/usuarios',(req,res) => {
    res.send(usuarios)
})

app.post('rede/usuarios',(req,res) => {
    cont++

    const nome = req.body.nome
    const email = req.body.email

    usuarios[cont] = {
        nome,
        email
    }

    res.status(400).end()
})

app.listen(2000,(req,res) => {
    console.log('Porta 2000 (----------------------------------)')
})