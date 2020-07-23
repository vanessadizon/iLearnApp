const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const dbConn = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

dbConn.connect((err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('db ' + dbConn.state);
})


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }
}

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     password: 'password',
//     user: 'root',
//     database: 'ilearndb',
//     host: 'localhost',
//     port: '3306'
// });

// let myDB = {};

// myDB.all = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM users', (err, res) => {
//             if(err) {
//                 return reject(err);
//             }
//             return resolve(res);
//         })

//     })
// }

module.exports = DbService;