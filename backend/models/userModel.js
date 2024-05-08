const connection = require("../configs/config");
const path = require('path');

class UserModel {

    constructor() {
        const moment = require('moment');
        this.now = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    
    
    async fetch_user_data(data) {
        console.log(data);
        const user_name = data.name;
        const password = data.password;
        console.log(user_name);
        try{
            const results = await new Promise ((resolve,reject) =>{
                connection.query('SELECT*FROM users WHERE username = ? AND password = ?', [user_name, password], (error, results, fields) =>{
                    if (error) {
                        console.error('Error fetching data', error);
                        reject(error);
                    } else {
                        console.log(results);
                        resolve(results);
                    }
                })
            })
            return results;
        }
        catch(error){
            console.error('Error fetching data', error);
            throw(error);
        }
    }
    



    
    
}

module.exports = new UserModel();
