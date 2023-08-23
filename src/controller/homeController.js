const handHelloWorld = (req, res) => {
    const name = "Tien"
    return res.render("home.ejs", { name })
}

module.exports = { handHelloWorld }