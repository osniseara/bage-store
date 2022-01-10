module.exports = app => {
app.get('/produtos', (req, res) => res.send("Você está cadastrando produtos."));

app.post('/produtos', (req, res) => {
    console.log(req.body)
    res.send("Você está cadastrando um produto")

})
}