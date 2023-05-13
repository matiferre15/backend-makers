import * as mysql from 'mysql2'
import keys from '../database/keys';

const pool = mysql.createPool(keys.database);


pool.getConnection(function(err,conn){
    console.log('DB is conected')
// Connection is automatically released when query resolves
});



export default pool;