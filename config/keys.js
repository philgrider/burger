console.log('this is loaded');
require('dotenv').config();

exports.db_password = process.env.db_password;