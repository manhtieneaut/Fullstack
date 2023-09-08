import userService from '../service/userService'

const handHelloWorld = (req, res) => {
    const name = "Tien"
    return res.render("home.ejs", { name })
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList()
    return res.render("user.ejs", { userList })
}

const handleDeleteUser = async (req, res) => {
    let id = req.params.id
    await userService.deleteUser(id)
    return res.redirect("/user")

}

const handleCreateUser = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username

    await userService.createNewUser(email, password, username)
    return res.redirect("/user")
}

module.exports = {
    handHelloWorld,
    handleUserPage,
    handleCreateUser,
    handleDeleteUser
}