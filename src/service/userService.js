import mysql from "mysql2/promise"
import bluebird from "bluebird"
import bcrypt from "bcryptjs"
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

const createNewUser = (email, password, username) => {
    connection.query(
        'INSERT INTO users(email,password,username) VALUES( ? , ? , ? )', [email, hashPass(password), username],
        function (err, results) {
            if (err) {
                console.log(err)
            }
            console.log(results);
        }
    );
}

const getUserList = async () => {
const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    let users = []
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `users`');
        // console.log(">>>check row", rows)
        return rows
    } catch (error) {
        console.log(">>>check error", error)

    }
};

module.exports = { createNewUser, getUserList }