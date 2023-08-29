import mysql from "mysql2"
import bcrypt from "bcryptjs"
var salt = bcrypt.genSaltSync(10);
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

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
            console.log(results); // results contains rows returned by server
            // console.log(fields); 
        }
    );
}

module.exports = { createNewUser }