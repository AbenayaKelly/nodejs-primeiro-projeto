const express = require('express') //importação da biblioteca com node
const app = express() // criando o backend 
const PORT = 3000

app.get('/',(req, res) => {
res.send('app GET ')
})

app.post('/', (req, res) => {
    res.send('app POST ')
})

app.delete('/', (req, res) => {
    res.send('app DELETE')
})
app.listen(PORT, () =>{
console.log(`App consta na porta ${PORT}`)
})// Tomar uma ação quando entrar algo 