import mysql from "mysql2/promise"
import bluebird from "bluebird"
import bcrypt from "bcryptjs"
import db from "../models";


var salt = bcrypt.genSaltSync(10);

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'jwt'
// });


const hashPass = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt)
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        // const [rows, fields] = await connection.execute('INSERT INTO users(email,password,username) VALUES( ? , ? , ? )', [email, hashPass(password), username]);
        // return rows

        await db.User.create(
            {
                email:email,
                password:hashPass(password),
                username:username
            }
        )

    } catch (error) {
        console.log(">>>check error", error)
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
        return rows
    } catch (error) {
        console.log(">>>check error", error)
    }
}

const getUserList = async () => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    let users = []
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `users`');
        return rows
    } catch (error) {
        console.log(">>>check error", error)
    }
};

module.exports = {
    createNewUser,
    getUserList,
    deleteUser
}