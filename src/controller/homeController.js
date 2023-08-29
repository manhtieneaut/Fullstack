import userService from '../service/userService'

const handHelloWorld = (req, res) => {
    const name = "Tien"
    return res.render("home.ejs", { name })
}

const handleUserPage = (req, res) => {
    return res.render("user.ejs")
}

const handleCreateUser = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username

    userService.createNewUser(email, password, username)
    return res.send("create user")
}

module.exports = {
    handHelloWorld,
    handleUserPage,
    handleCreateUser
}